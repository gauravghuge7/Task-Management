
import { Navbar, Button, Container, Dropdown, Form, Modal } from "react-bootstrap";
import { FaUser } from 'react-icons/fa'; // Import the profile icon
import axios from 'axios'
import { useEffect, useState } from 'react';


function Componynavabar() {

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









  



  return (
    <div className="d-flex">
      <Navbar bg="white" expand="lg" className="flex flex-row w-full h-20">
        <Container className="flex flex-row justify-center align-items-center">
          {/* Logo */}
          <Navbar.Brand href="#" className="mb-3">
            <img
              src="../../../public/accets/GBIS.png"
              alt="Logo"
              style={{ width: "70%", height: "auto" }}
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

     
     
    </div>
  );
}
}
export default Componynavabar;
