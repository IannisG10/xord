const mongoose = require("mongoose")

const ClientSchema = mongoose.Schema({
    nom: {
        type: String, 
        required: true
        },
    prenom: String,
    email: String,
    adresse: String,
    province: String
})

const clientModel = mongoose.model("client",ClientSchema)

module.exports = clientModel
