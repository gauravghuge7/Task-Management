import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CreateTeamForm = () => {
    const [teamName, setTeamName] = useState('');
    const [teamLead, setTeamLead] = useState('');
    const [teamMembers, setTeamMembers] = useState(['']);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
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
    };

    const handleMemberChange = (index, value) => {
        const newTeamMembers = [...teamMembers];
        newTeamMembers[index] = value;
        setTeamMembers(newTeamMembers);
    };

    const addTeamMember = () => {
        setTeamMembers([...teamMembers, '']);
    };

    const removeTeamMember = (index) => {
        const newTeamMembers = teamMembers.filter((_, i) => i !== index);
        setTeamMembers(newTeamMembers);
    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md={6}>
                    <h3>Create Team</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="teamName">
                            <Form.Label>Team Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter team name"
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="teamLead">
                            <Form.Label>Team Lead</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter team lead name"
                                value={teamLead}
                                onChange={(e) => setTeamLead(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Label>Team Members</Form.Label>
                        {teamMembers.map((member, index) => (
                            <Form.Group controlId={`teamMember-${index}`} key={index}>
                                <Form.Control
                                    type="text"
                                    placeholder={`Enter team member ${index + 1}`}
                                    value={member}
                                    onChange={(e) => handleMemberChange(index, e.target.value)}
                                />
                                {index > 0 && (
                                    <Button
                                        variant="danger"
                                        onClick={() => removeTeamMember(index)}
                                        className="mt-2"
                                    >
                                        Remove
                                    </Button>
                                )}
                            </Form.Group>
                        ))}
                        <Button variant="secondary" onClick={addTeamMember}>
                            Add Team Member
                        </Button>

                        <Button variant="primary" type="submit" className="mt-3">
                            Create Team
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateTeamForm;
