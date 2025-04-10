const mongoose = require('mongoose')

const task_schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    status:{
        type: String,
        enum: ["pending", "in-progress", "completed"],
        default: "pending"
    },
    duedate:{
       type:Date
    },
    assignedTo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user_model"
    }
})

const task = mongoose.model("task_model",task_schema)
module.exports = task