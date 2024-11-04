const express = require('express')
const router = express.Router()
const tasks = []

// define a sample route
router.get('/', (req, res) => { 
    res.json(tasks)
});

router.post('/', (req, res) => {
    const { name , description } = req.body;
    tasks.push({id: tasks.length + 1, name, description})
    res.status(201).json(newTask);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const task = tasks.find(t => t.id == parseInt(id));

    if(!task) return res.status(404).send('Task not found');

    task.name = name;
    task.description = description;
    res.json(task)
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const task = tasks.find(t => t.id == parseInt(id));

    if(!task) return res.status(404).send('Task not found');

    tasks.splice(task, 1);    
    res.status(204).send();
});

module.exports = router;
