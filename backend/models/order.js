const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    orderId : Number,
    clientName: String,

})

const Order = mongoose.model("Order",orderSchema)

module.exports = Order