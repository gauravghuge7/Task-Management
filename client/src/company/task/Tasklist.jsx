// src/TaskList.js
import  { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const Tasklist = ({ setConditionalComponent }) => {

    const [tasks, setTasks] = useState([
        {
            companyName: "ABC Company",
            priority: "High",
            taskDetail: "Task Detail",
            ticketCreateDate: "2022-01-01",
            dueDate: "2022-01-01",
            assignName: "John Doe"
        },
        {
            companyName: "XYZ Company",
            priority: "Medium",
            taskDetail: "Task Detail",
            ticketCreateDate: "2022-01-01",
            dueDate: "2022-01-01",
            assignName: "John Doe"
        },
    ]);


    useEffect(() => {
        console.log('Task List Data Fetched:', tasks);
    }, [tasks]);
    

    return (
        <div className="container mt-4">
            <h2>Task List</h2>  
            <span 
                onClick={() => setConditionalComponent('addTask')} 
                className="btn btn-primary"
            >Add New Task</span>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Priority</th>
                        <th>Task Detail</th>
                        <th>Ticket Creation Date</th>
                        <th>Due Date</th>
                        <th>Assign Name</th>
                        <th>Action</th>
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
                            <td><button className="btn ">Modify</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tasklist;
