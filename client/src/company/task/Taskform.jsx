// src/TaskForm.js
import React, { useState } from 'react';

const TaskForm = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        priority: '',
        taskDetail: '',
        ticketCreateDate: '',
        dueDate: '',
        assignName: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Handle form submission logic here (e.g., API call)
    };

    return (
        <div className="container mt-4">
            <h2>Create a New Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="companyName" className="form-label">Company Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="companyName" 
                        name="companyName" 
                        value={formData.companyName} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="priority" className="form-label">Priority</label>
                    <select 
                        className="form-select" 
                        id="priority" 
                        name="priority" 
                        value={formData.priority} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select Priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="taskDetail" className="form-label">Task Detail</label>
                    <textarea 
                        className="form-control" 
                        id="taskDetail" 
                        name="taskDetail" 
                        rows="3" 
                        value={formData.taskDetail} 
                        onChange={handleChange} 
                        required
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="ticketCreateDate" className="form-label">Ticket Creation Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="ticketCreateDate" 
                        name="ticketCreateDate" 
                        value={formData.ticketCreateDate} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="dueDate" className="form-label">Due Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="dueDate" 
                        name="dueDate" 
                        value={formData.dueDate} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="assignName" className="form-label">Assign Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="assignName" 
                        name="assignName" 
                        value={formData.assignName} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <button type="submit" className="btn btn-primary">Create Task</button>
            </form>
        </div>
    );
};

export default TaskForm;
   