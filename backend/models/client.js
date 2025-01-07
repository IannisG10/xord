const mongoose = require("mongoose")

const ClientSchema = mongoose.Schema({
    nom: String,
    prenom: String,
    email: String
})

const clientModel = mongoose.model("client",ClientSchema)

module.exports = clientModel
