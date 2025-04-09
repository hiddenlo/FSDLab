const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Todo_Model = require('./Models/Todo')

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/TodoApp")
.then(console.log("connected"))
.catch(console.log("no connected"))
app.post('/add' , async (req,res)=>
{
    const task = req.body.task;
    Todo_Model.create({
        task:task
    }).then(result => res.json(result))
    .catch(err=>console.log(err))
    res.status(500).send('Error adding task')
})

app.listen(3000,()=>console.log("Server is running"))