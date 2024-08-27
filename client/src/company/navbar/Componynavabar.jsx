import React, { useState } from "react";
import { Navbar, Button, Container, Dropdown, Form, Modal } from "react-bootstrap";
import { FaUser } from 'react-icons/fa'; // Import the profile icon

function Componynavabar() {
  const [showProfile, setShowProfile] = useState(false);

  const handleClose = () => setShowProfile(false);
  const handleShow = () => setShowProfile(true);

  const handleLogout = () => {
    // Logic to handle logout goes here
    console.log("Logout clicked");
    // For example, you can clear the user session or redirect to the login page
  };

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

          {/* Profile Dropdown */}
          <Dropdown className="ml-auto">
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{
                backgroundColor: "white",
                border: "none",
                boxShadow: "none",
                color: "white",
                padding: 0, // Remove padding
                width: "auto",
                height: "auto",
                borderRadius: "50%" // Make it circular if you want
              }}
            >
              <FaUser
                style={{
                  color: "#17a2b8", // Teal color
                  fontSize: "2.0rem"
                }}
              /> {/* Teal profile icon */}
            </Dropdown.Toggle>

            <Dropdown.Menu
              align="end"
              style={{ backgroundColor: "white", borderColor: "white" }} // White background for menu
            >
              <Dropdown.Item onClick={handleShow}>Edit Profile</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>

      {/* Profile Modal */}
      <Modal show={showProfile} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Componynavabar;
