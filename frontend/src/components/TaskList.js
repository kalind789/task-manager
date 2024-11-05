import React, { useState, useEffect } from 'react';
import api from '../api';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    // Function to fetch tasks from the backend
    const fetchTasks = async () => {
        try {
            const response = await api.get('/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks: ', error);
        }
    };

    // Call fetchTasks once when the component loads
    useEffect(() => {
        fetchTasks();
    }, []);

    // Function to add a new task
    const addTask = async (name, description) => {
        try {
            const response = await api.post('/tasks', { name, description });
            setTasks((prevTasks) => [...prevTasks, response.data]); // Update tasks with the new task
        } catch (error) {
            console.error('Could not add task: ', error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Task List</h1>
            <TaskForm addTask={addTask} /> {/* Pass the addTask function to TaskForm */}
            <ul>
                {tasks.map((task) => (
                    <TaskItem key={task._id} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
