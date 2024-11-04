// import express library
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));

// initialize the app
const app = express();
app.use(express.json());

// define a port
const PORT = process.env.PORT || 3000;

const tasksRoute = require('./routes/tasks');
app.use('/tasks', tasksRoute);

// simple route
app.get('/', (req, res) => {
	res.send('Hello, World!');
});

// start the server
app.listen(PORT, () => { console.log(`server running on port ${PORT}`);
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});