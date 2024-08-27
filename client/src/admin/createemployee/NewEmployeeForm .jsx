import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const NewEmployeeForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    photo: null,
    password: "",
    confirmPassword: "",
    designation: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Card className="p-4 border-0" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <h3 className="text-center mb-4" style={{ fontWeight: '600' }}>Add New Employee</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="fullName" className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter full name"
                    value={formData.fullName}
                    name="fullName"
                    onChange={handleChange}
                    required
                    style={{ borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                  />
                </Form.Group>

                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email ID</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    required
                    style={{ borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                  />
                </Form.Group>

                <Form.Group controlId="designation" className="mb-3">
                  <Form.Label>Designation</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter designation"
                    value={formData.designation}
                    name="designation"
                    onChange={handleChange}
                    required
                    style={{ borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                  />
                </Form.Group>

                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={formData.password}
                    name="password"
                    onChange={handleChange}
                    required
                    style={{ borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                  />
                </Form.Group>

                <Form.Group controlId="confirmPassword" className="mb-4">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                    required
                    style={{ borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    background: 'linear-gradient(90deg, #28a745, #5bc85c)',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '10px 20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                  className="w-100"
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewEmployeeForm;
