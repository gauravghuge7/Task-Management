import React, { useState } from 'react';

import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const AssignTaskForm = () => {
    const [projectName, setProjectName] = useState('');
    const [task, setTask] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        const newTask = {
            projectName,
            task,
            companyName,
            description,
        };
        console.log(newTask);

        // Clear the form fields
        setProjectName('');
        setTask('');
        setCompanyName('');
        setDescription('');
    };

    return (
        <Container>
           
             
            <Row className="justify-content-md-center mt-5">
                <Col md={6}>
                    <h3>Assign Task to Team Lead</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="projectName">
                            <Form.Label>Project Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter project name"
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="task">
                            <Form.Label>Task</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter task"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="companyName">
                            <Form.Label>Existing Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter company name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Assign Task
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AssignTaskForm;
