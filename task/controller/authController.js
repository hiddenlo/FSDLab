const User = require("../model/user")
const jwt = require("jsonwebtoken")
require("dotenv").config()

//Register a user
const register = async (req,res)=>{
    try
    {
        const user = await User.create(req.body)
        res.status(201).json({message:"User Registered",user})
    }
    catch(err)
    {
        res.status(400).json({message:"Error registering a user",err})
    }
}

//login with the registered user
const login = async (req,res)=>{

    const {email,password} = req.body
    const user = await User.findOne({email,password})

    if(!user)
        return res.status(400).json({ message: "Error no user found" });
        

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY)
    res.json({token})
}

module.exports={
    register,
    login
}