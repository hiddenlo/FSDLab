const jwt=require ("jsonwebtoken");
const User=require("../model/user")
require('dotenv').config();

const AuthMiddleware = async (req,res,next)=>{

    const token = req.header("Authorization")?.replace("Bearer ","")

    if(!token)
        return res.status(401).json({err:"Access Denied"})

    try
    {
        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        const user = await User.findById(decoded.id)

        if(!user)
            return res.status(400).json({err})
        req.user = user;
        next();
    }
    catch {
        res.status(401).json({ error: "Invalid token" });
    }
}

module.exports = AuthMiddleware

