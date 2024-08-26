import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

const TaskForm = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const [formData, setFormData] = useState({
        companyName: '',
        priority: '',
        taskDetail: '',
        ticketCreateDate: '',
        dueDate: '',
        assignName: '',
    });

    const config = {
        readonly: false,
        placeholder: 'Start typing your task details...',
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleJoditChange = (newContent) => {
        setContent(newContent);
        setFormData({
            ...formData,
            taskDetail: newContent,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Handle form submission logic here (e.g., API call)
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 border-0" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h2 className="text-center mb-4" style={{ fontWeight: '600', color: '#007BFF' }}>Create a New Task</h2>
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
                            style={{ borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
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
                            style={{ borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                        >
                            <option value="">Select Priority</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
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
                            style={{ borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
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
                            style={{ borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
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
                            style={{ borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="taskDetail" className="form-label">Task Details</label>
                        <JoditEditor
                            ref={editor}
                            value={content}
                            config={config}
                            tabIndex={1}
                            onBlur={handleJoditChange}
                            onChange={() => {}}
                            style={{ borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        style={{
                            background: 'linear-gradient(90deg, #007bff, #00d2ff)',
                            border: 'none',
                            borderRadius: '10px',
                            padding: '10px 20px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        Create Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;