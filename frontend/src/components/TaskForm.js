import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addTask(name, description); // Call addTask directly
            setName('');
            setDescription('');
        } catch (error) {
            console.error('Could not add task: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-200 rounded mb-4">
            <h2 className="text-xl font-bold mb-2">Add New Task</h2>
            <input 
                type="text"
                placeholder="Task Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 mb-2 border rounded w-full"
                required
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-2 mb-2 border rounded w-full"
                required
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded"> Add Task</button>
        </form>
    );
};

export default TaskForm;