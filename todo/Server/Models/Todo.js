const mongoose = require("mongoose")

const Todo_Schema = new mongoose.Schema({
    task:String
})

const Todo_Model = mongoose.model("Todo_model",Todo_Schema)

module.exports = Todo_Model