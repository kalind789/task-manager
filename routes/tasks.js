const express = require('express');
const router = express.Router();
const Task = require('./Task');

// Define a sample route to get all tasks
router.get('/', async (req, res, next) => { 
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        next(err); // Pass error to the error-handling middleware
    }
});

// Route to create a new task
router.post('/', async (req, res, next) => {
    try {
        const { name, description } = req.body;
        const newTask = new Task({ name, description });
        
        await newTask.save();
        res.status(201).json(newTask); // Respond with the created task
    } catch (err) {
        next(err);
    }
});

// Route to update an existing task by ID
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, description, completed } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { name, description, completed },
            { new: true }
        );

        if (!updatedTask) return res.status(404).send('Task not found');
        res.json(updatedTask); // Respond with the updated task
    } catch (err) {
        next(err);
    }
});

// Route to delete a task by ID
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);
        
        if (!deletedTask) return res.status(404).send('Task not found');
        res.status(204).send(); // No content response
    } catch (err) {
        next(err); // Pass error to the error-handling middleware
    }
});

module.exports = router;