import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <li className="bg-gray-100 p-4 mb-2 rounded-md shadow-sm flex justify-between items-center">
      <div>
        <h2 className="font-semibold">{task.name}</h2>
        <p className="text-gray-700">{task.description}</p>
      </div>
      <div>
        {/* Add buttons for edit and delete functionality here */}
        <button className="bg-blue-500 text-white px-4 py-1 rounded mr-2">Edit</button>
        <button className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;