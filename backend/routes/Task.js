const mongoose = require('mongoose');

// Define a DB schema for Task
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        reqired: true
    },
    description: {
        type: String,
        reqired: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
