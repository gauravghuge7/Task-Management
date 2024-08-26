import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Createcompanyform = () => {
    const [companyName, setCompanyName] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [companyPassword, setCompanyPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (companyPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        // Submit form data to the backend or handle it as needed
        console.log({
            companyName,
            companyEmail,
            companyPassword,
        });
    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md={6}>
                    <h3>Create Company</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="companyName">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter company name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="companyEmail">
                            <Form.Label>Company Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter company email"
                                value={companyEmail}
                                onChange={(e) => setCompanyEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="companyPassword">
                            <Form.Label>Company Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={companyPassword}
                                onChange={(e) => setCompanyPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <br />
                        <Button variant="primary" type="submit">
                            Create Company
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Createcompanyform;
