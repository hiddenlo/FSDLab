const express = require('express')
const mongoose = require('mongoose')

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express()

mongoose.connect("mongodb://127.0.0.1:27017/TaskManagement")
.then(()=>console.log("Connection succesful"))
.catch((err)=>console.log("Connection failed",err))

app.use(express.json())
app.use("/",authRoutes)
app.use("/",taskRoutes)

app.listen(3000,()=>console.log("Server running on port 3000"))


