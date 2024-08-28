import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const AdminNavbar = ({ adminName, onLogout }) => {
  return (
    <Navbar bg="light" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          {/* Replace with your logo */}
          <img
            src="../../../public/accets/GBIS.png"
            width="150"
            height="150"
            className="d-inline-block align-top"
            alt="Logo"
     
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item className="d-flex align-items-center text-black">
              {adminName}
            </Nav.Item>
            <Nav.Item>
              <Button variant="outline-danger" onClick={onLogout} className="ml-3">
                Logout
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;
