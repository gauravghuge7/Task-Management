import React, { useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

const CompanyList = ({ setValue }) => {
    const [companies, setCompanies] = useState([
        { name: 'Company 1', email: 'company1@gmail.com', password: 'password123' },
        { name: 'Company 2', email: 'company2@gmail.com', password: 'password456' },
        { name: 'Company 3', email: 'company3@gmail.com', password: 'password789' },
    ]);

    return (
        <Container>
           <div className='flex justify-between'>
                <h2 className="mb-4">Companies List</h2>
                <button className=''
                    onClick={() => setValue("createcompany")}
                >Add Companies</button>
            </div>
            <Row className="justify-content-md-center mt-5">
                <Col md={12}>
                    <h3>Registered Companies</h3>
                    {companies.length > 0 ? (
                        <Table striped bordered hover>
                            <thead>
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
                        <p>No companies registered yet.</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default CompanyList;
