const express=require("express")
const app=express()

const mongoose=require("mongoose")
const mongo_url="mongodb://127.0.0.1:27017/users"
mongoose.connect(mongo_url)
.then(()=>(console.log("Connected")))
.catch((err)=>console.log(err))

app.use(express.json())

const user_schema=new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true
    },
    createdAt:
    {
        type:Date,
        default:Date.now
    }
})

const user_model = mongoose.model("user_details",user_schema)
app.listen(2000,()=>console.log("server running"))

// http://localhost:2000/api/users/register
app.post('/api/users/register', async (req,res)=>{
    try{
        const user=await user_model.create(req.body)
        res.status(201).json({ message: "User registered successfully", user });
    }
    catch(err)
    {
        res.status(400).json({ error: err.message });
    }
})
// http://localhost:2000/api/users/67e386ce2a65858250d4621c
app.get('/api/users/:id', async (req, res) => {
    try {
        const users = await user_model.findById(req.params.id);
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


// http://localhost:2000/api/users/67e386ce2a65858250d4621c
app.put('/api/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const { name, email, password } = req.body;

        const updatedUser = await user_model.findByIdAndUpdate(userId,
            { name, email, password },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", updatedUser });
    } 
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// http://localhost:2000/api/users/67e386ce2a65858250d4621c
app.delete('/api/users/:id', async (req, res) => {
    try {
        const user = await user_model.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully", user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


