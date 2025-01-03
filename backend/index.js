const express = require("express")
const mongoose = require("mongoose")
const app = express()

require("dotenv").config()

mongoose.connect("mongodb+srv://guerraiannis:xord1234@cluster0.obc8u.mongodb.net/").then(()=>{
    console.log("Connexion établie avec suces à la base de donnée")
}).catch(err => {
    console.error("Error when connecting database")
})

const PORT = process.env.PORT 
app.use(express.json())

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})


