import React from 'react';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react';


const Componynavabar = () => {  
  
  const [client, setClient] = useState('');
  const navigate = useNavigate();
  const onLogout = async () => {
    
    try {
      const response = await axios.post('/api/client/logout');  // this is the api call we are useing the axios
      console.log("response => ", response);  // this is the api call we are useing the axios
      if(response.data.success === true) {
        window.location.href = '/';



          
      }


    } 
    catch (error) {
      console.log("error => ", error);
    }
  }
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
              {client?.clientName}
            </Nav.Item>
            <Nav.Item>
              <Button variant="outline-dark" onClick={onLogout} className="ml-3">
                Logout
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default  Componynavabar;
