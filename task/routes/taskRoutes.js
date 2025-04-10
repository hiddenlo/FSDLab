const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
} = require("../controller/taskController");

router.use(auth);

router.post("/create", createTask);
router.get("/all", getTasks);
router.get("/:id", getTaskById);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;
