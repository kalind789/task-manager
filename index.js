require('dotenv').config();

// import express library
const express = require('express');

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
