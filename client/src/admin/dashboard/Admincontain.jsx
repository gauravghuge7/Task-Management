import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaUserPlus, FaUsers, FaBuilding, FaProjectDiagram, FaTasks } from 'react-icons/fa';

const Admincontain = () => {
  return (
    <Container fluid className="p-4">
    
      <Row>
        <Col md={4} className="mb-4">
          <Card className="text-center shadow-sm">
            <Card.Body>
              <FaUserPlus size={50} className="text-primary mb-3 text-center" />
              <Card.Title> Employees</Card.Title>
              <Card.Text>
                <h3>50</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="text-center shadow-sm">
            <Card.Body>
              <FaUsers size={50} className="text-success mb-3" />
              <Card.Title> Teams</Card.Title>
              <Card.Text>
                <h3>4</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="text-center shadow-sm">
            <Card.Body>
              <FaBuilding size={50} className="text-warning mb-3" />
              <Card.Title> Companys</Card.Title>
              <Card.Text>
                <h3>5</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="text-center shadow-sm">
            <Card.Body>
              <FaProjectDiagram size={50} className="text-info mb-3" />
              <Card.Title> Projects</Card.Title>
              <Card.Text>
                <h3>10</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="text-center shadow-sm">
            <Card.Body>
              <FaTasks size={50} className="text-danger mb-3" />
              <Card.Title>Assign Team</Card.Title>
              <Card.Text>
                <h3>3</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Admincontain;
