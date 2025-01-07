const express = require("express")
const mongoose = require("mongoose")
const client = require("./models/client")
const app = express()

require("dotenv").config()

mongoose.connect("mongodb+srv://guerraiannis:xord1234@cluster0.obc8u.mongodb.net/").then(()=>{
    console.log("Connexion établie avec suces à la base de donnée")
}).catch(err => {
    console.error("Error when connecting database")
})

const PORT = process.env.PORT 
app.use(express.json())

// The main root (for the test)
app.get("/",(req,res) => {
    try {
        res.send("Connected successfully with 3525 port")
    } catch (error) {
        res.send("ERROR")
    }
})

app.post("/client",async(req,res) => {
    const clientData = req.body
    try {
        console.log("Data post successfully to the server",clientData)
        res.status(200).json(clientData)
    } catch (err) {
        console.error("Impossible to post data",err)
    }
})

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})


