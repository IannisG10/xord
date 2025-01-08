const express = require("express")
const mongoose = require("mongoose")
const client = require("./models/client")
const cors = require("cors")
const app = express()

require("dotenv").config()

mongoose.connect("mongodb+srv://guerraiannis:xord1234@cluster0.obc8u.mongodb.net/XordDB").then(()=>{
    console.log("Connexion établie avec suces à la base de donnée")
}).catch(err => {
    console.error("Error when connecting database")
})

const PORT = process.env.PORT 
app.use(express.json())
app.use(cors())

// The main root (for the test)
app.get("/",(req,res) => {
    try {
        res.send("Connected successfully with 3525 port")
    } catch (error) {
        res.send("ERROR")
    }
})

app.post("/client",async(req,res) => {
    const {nom,prenom,email,adresse,phoneNumber,province,cp} = req.body
    try {
        const Client = new client({
            nom: nom,
            prenom: prenom,
            email: email,
            phoneNumber: phoneNumber,
            adresse: adresse,
            province: province,
            cp: cp
        })
        const saveClient = await Client.save()
        console.log("post successfully :",saveClient)
        
        res.json({message: "Client crée avec succès"})
    } catch (err) {
        console.error("Impossible to post data",err)
    }
})

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})


