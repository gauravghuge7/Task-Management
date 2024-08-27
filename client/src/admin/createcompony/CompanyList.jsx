import React, { useState } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

const CompanyList = ({ setValue }) => {
    const [companies, setCompanies] = useState([
        { name: 'Company 1', email: 'company1@gmail.com', password: 'password123' },
        { name: 'Company 2', email: 'company2@gmail.com', password: 'password456' },
        { name: 'Company 3', email: 'company3@gmail.com', password: 'password789' },
    ]);

    return (
        <Container
            style={{
                background: "#f0f4f8",
                padding: "40px",
                borderRadius: "12px",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                color: "#333",
                maxWidth: "95%",
                marginTop: "30px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "25px",
                }}
            >
                <h2 style={{ margin: 0, color: "#333" }}>Companies List</h2>
                <Button
                    style={{
                        backgroundColor: "#4CAF50",
                        border: "none",
                        padding: "12px 24px",
                        borderRadius: "8px",
                        color: "#fff",
                        fontWeight: "bold",
                        transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#45a049")
                    }
                    onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "#4CAF50")
                    }
                    onClick={() => setValue("createcompany")}
                >
                    Add Companies
                </Button>
            </div>
            <Row className="justify-content-md-center">
                <Col md={12}>
                    {companies.length > 0 ? (
                        <Table
                            striped
                            bordered
                            hover
                            style={{
                                backgroundColor: "#fff",
                                color: "#333",
                                borderRadius: "12px",
                                overflow: "hidden",
                            }}
                        >
                            <thead
                                style={{
                                    backgroundColor: "#007BFF",
                                    color: "#fff",
                                }}
                            >
                                <tr>
                                    <th>#</th>
                                    <th>Company Name</th>
                                    <th>Company Email</th>
                                    <th>Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                {companies.map((company, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{company.name}</td>
                                        <td>{company.email}</td>
                                        <td>{company.password}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    ) : (
                        <p style={{ color: "#333" }}>No companies registered yet.</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default CompanyList;
