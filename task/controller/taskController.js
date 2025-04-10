const Task = require("../model/task");

exports.createTask = async (req, res) => {
    try {
        const task = await Task.create({ ...req.body, assignedTo: req.user._id });
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getTasks = async (req, res) => {
    const tasks = await Task.find({ assignedTo: req.user._id });
    res.json(tasks);
};

exports.getTaskById = async (req, res) => {
    const task = await Task.findOne({ _id: req.params.id, assignedTo: req.user._id });
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
};

exports.updateTask = async (req, res) => {
    const task = await Task.findOneAndUpdate(
        { _id: req.params.id, assignedTo: req.user._id },
        req.body,
        { new: true, runValidators: true }
    );
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
};

exports.deleteTask = async (req, res) => {
    const task = await Task.findOneAndDelete({ _id: req.params.id, assignedTo: req.user._id });
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json({ message: "Task deleted", task });
};
