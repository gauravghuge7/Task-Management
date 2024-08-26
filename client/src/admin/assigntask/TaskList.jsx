import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';


// This is the task list page 

const TaskList = ({ setValue }) => {
    const [tasks, setTasks] = useState([
        {projectName: 'Project 1', task: 'Task 1', companyName: 'Company 1', teamLead: 'Lead 1', description: 'Description 1'},
        {projectName: 'Project 2', task: 'Task 2', companyName: 'Company 2', teamLead: 'Lead 2', description: 'Description 2'},
        {projectName: 'Project 3', task: 'Task 3', companyName: 'Company 3', teamLead: 'Lead 3', description: 'Description 3'},
    ]);

    return (
        <Container>
         <div className="flex justify-between items-center">
    <h2 className="mb-4">Assigned Tasks</h2>
    <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setValue("assigntask")}
    >
        Add New Task
    </button>
</div>
            <Row className="justify-content-md-center mt-5">  
                <Col md={12}>
               
                    {tasks.length > 0 ? (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Project Name</th>
                                    <th>Task</th>
                                    <th>Company Name</th>
                                    <th>Team Lead</th> {/* Added Team Lead column */}
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{task.projectName}</td>
                                        <td>{task.task}</td>
                                        <td>{task.companyName}</td>
                                        <td>{task.teamLead}</td> {/* Displaying Team Lead */}
                                        <td>{task.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    ) : (
                        <p>No tasks assigned yet.</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default TaskList;
  