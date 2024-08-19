// src/TaskList.js
import React from 'react';

const Tasklist = ({  }) => {
    return (
        <div className="container mt-4">
            <h2>Task List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Priority</th>
                        <th>Task Detail</th>
                        <th>Ticket Creation Date</th>
                        <th>Due Date</th>
                        <th>Assign Name</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.companyName}</td>
                            <td>{task.priority}</td>
                            <td>{task.taskDetail}</td>
                            <td>{task.ticketCreateDate}</td>
                            <td>{task.dueDate}</td>
                            <td>{task.assignName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tasklist;
