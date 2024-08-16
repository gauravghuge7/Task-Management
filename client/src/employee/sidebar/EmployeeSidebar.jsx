import React from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeSidebar = () => {
  return (
    <div className="d-flex flex-column vh-100 p-3 bg-light">
      <h2 className="mb-4">Employee Panel</h2>
      <Nav className="flex-column">
        <Nav.Link href="#dashboard" className="mb-2">
          <i className="bi bi-speedometer2"></i> Dashboard
        </Nav.Link>
        <Nav.Link href="#task" className="mb-2">
          <i className="bi bi-list-task"></i> Task
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default EmployeeSidebar;
