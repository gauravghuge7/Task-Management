import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

function Componynavabar() {
  return (
    <div className="d-flex">
      <Navbar bg="light" expand="lg" className="flex flex-row w-full h-20" >
        
        <Container className="flex flex-row justify-center align-items-center">

          {/* Logo */}
          <Navbar.Brand href="#" className="mb-3">
            <img
              src="../../../public/accets/GBIS.png"
              alt="Logo"
              style={{ width: '70%', height: 'auto' }}
            />
          </Navbar.Brand>


          {/* Client Name */}
          <Navbar.Text className="">
            <h5>Client Name</h5>
          </Navbar.Text>

          
          

          {/* Logout Button */}
          <Button variant="danger" className="">
            Logout
          </Button>

        </Container>
      </Navbar>
    </div>
  );
}

export default Componynavabar;
