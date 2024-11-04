const express = require('express')
const router = express.Router()

// define a sample route
router.get('/', (req, res) => { 
    res.send('Task manager home!'); 
});

router.post('/', (req, res) => {
    res.send('Create a new task');
});

router.put('/:id', (req, res) => {
    res.send(`Update task with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`Delete task with ID ${req.params.id}`);
});

module.exports = router;
