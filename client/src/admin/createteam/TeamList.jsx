import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const TeamList =({setValue}) => {

    const [teams, setTeams] = useState([
        {name: 'Team 1', lead: 'John', members: ['John', 'Jane']},
        {name: 'Team 2', lead: 'Jane', members: ['John', 'Jane']},
        {name: 'Team 3', lead: 'John', members: ['John', 'Jane']},  
    ]);


    const employee = useSelector(state => state.employeeReducer.employee);

    
    console.log(" data =>  ", employee);

    

    return (
        <Container>

<div className='flex justify-between'>
                <h2 className="mb-4">Teams List</h2>
                <button className=''
                    onClick={() => setValue("createteam")}
                >Add New Team</button>
            </div> 

            <Row className="justify-content-md-center mt-5">
                <Col md={12}>
                    <h3>Registered Teams</h3>
                    {teams.length > 0 ? (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Team Name</th>
                                    <th>Team Lead</th>
                                    <th>Team Members</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teams.map((team, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{team.name}</td>
                                        <td>{team.lead}</td>
                                        <td>{team.members.join(', ')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    ) : (
                        <p>No teams registered yet.</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default TeamList;
