import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

function Componynavabar() {
  return (
    <div className="d-flex">
      <Navbar bg="light" expand="lg" className="flex-column vh-100" style={{ width: '250px' }}>
        <Container className="d-flex flex-column">
          {/* Logo */}
          <Navbar.Brand href="#" className="mb-3">
            <img
              src="../../../public/accets/GBIS.png"
              alt="Logo"
              style={{ width: '100%', height: 'auto' }}
            />
          </Navbar.Brand>

          {/* Client Name */}
          <Navbar.Text className="mb-4">
            <h5>Client Name</h5>
          </Navbar.Text>

          
          

          {/* Logout Button */}
          <Button variant="danger" className="mt-auto">
            Logout
          </Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default Componynavabar;
