import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const CreateTeamForm = () => {
    const [teamName, setTeamName] = useState('');
    const [teamLead, setTeamLead] = useState('');
    const [teamMembers, setTeamMembers] = useState(['']);
    const [numberOfMembers, setNumberOfMembers] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTeam = {
            name: teamName,
            lead: teamLead,
            members: teamMembers.filter(member => member.trim() !== ''),
        };
        console.log(newTeam);

        // Clear the form fields
        setTeamName('');
        setTeamLead('');
        setTeamMembers(['']);
        setNumberOfMembers(1);
    };

    const handleMemberChange = (index, value) => {
        const newTeamMembers = [...teamMembers];
        newTeamMembers[index] = value;
        setTeamMembers(newTeamMembers);
    };

    const handleNumberOfMembersChange = (e) => {
        const num = parseInt(e.target.value, 10);
        setNumberOfMembers(num);

        const newTeamMembers = Array(num).fill('').map((_, i) => teamMembers[i] || '');
        setTeamMembers(newTeamMembers);
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <Card className="p-4 border-0" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <Card.Body>
                            <h3 className="text-center mb-4" style={{ fontWeight: '600' }}>Create Team</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="teamName" className="mb-3">
                                    <Form.Label>Team Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter team name"
                                        value={teamName}
                                        onChange={(e) => setTeamName(e.target.value)}
                                        required
                                        style={{ borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                                    />
                                </Form.Group>

                                <Form.Group controlId="teamLead" className="mb-3">
                                    <Form.Label>Team Lead</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter team lead name"
                                        value={teamLead}
                                        onChange={(e) => setTeamLead(e.target.value)}
                                        required
                                        style={{ borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                                    />
                                </Form.Group>

                                <Form.Group controlId="numberOfMembers" className="mb-3">
                                    <Form.Label>Number of Team Members</Form.Label>
                                    <Form.Control
                                        type="number"
                                        min="1"
                                        value={numberOfMembers}
                                        onChange={handleNumberOfMembersChange}
                                        required
                                        style={{ borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                                    />
                                </Form.Group>

                                <Form.Label>Team Members</Form.Label>
                                {teamMembers.map((member, index) => (
                                    <Form.Group controlId={`teamMember-${index}`} key={index} className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder={`Enter team member ${index + 1}`}
                                            value={member}
                                            onChange={(e) => handleMemberChange(index, e.target.value)}
                                            style={{ borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                                        />
                                    </Form.Group>
                                ))}

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
                                    Create Team
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateTeamForm;
