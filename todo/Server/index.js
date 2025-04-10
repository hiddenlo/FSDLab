const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Todo_Model = require('./Models/Todo'); // Ensure you have a Todo model defined

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/TodoApp")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Failed to connect to MongoDB:", err));

// GET route to fetch all todos
app.get('/all', async (req, res) => {
    try {
        const todos = await Todo_Model.find();
        res.json(todos); // Send the fetched todos as a response
    } catch (err) {
        console.log(err);
        res.status(500).send('Error fetching todos');
    }
});

// POST route to add a new todo
app.post('/add', async (req, res) => {
    const { task } = req.body; // Assuming you're sending { task: "Todo task" }

    try {
        const newTodo = await Todo_Model.create({ task });
        res.json(newTodo); // Send the new todo as the response
    } catch (err) {
        console.log(err);
        res.status(500).send('Error adding task');
    }
});

// DELETE route to remove a todo
app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTodo = await Todo_Model.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).send('Todo not found');
        }
        res.json(deletedTodo); // Send the deleted todo as the response
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting todo');
    }
});

// PUT route to edit a todo
app.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { task } = req.body; // Assuming you're sending { task: "Updated task" }
    try {
        const updatedTodo = await Todo_Model.findByIdAndUpdate(id, { task }, { new: true });
        if (!updatedTodo) {
            return res.status(404).send('Todo not found');
        }
        res.json(updatedTodo); // Send the updated todo as the response
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating todo');
    }
});

app.listen(3000, () => console.log("Server is running on port 3000"));
