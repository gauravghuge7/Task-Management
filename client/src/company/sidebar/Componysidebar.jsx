import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Componysidebar = () => {
  return (
    <div className="d-flex flex-column vh-100 p-3 bg-dark text-white" style={{ width: '250px' }}>
      <h3 className="mb-4">Company Panel</h3>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link text-white">
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tasks" className="nav-link text-white">
            <i className="bi bi-list-task me-2"></i> Tasks
          </Link>
        </li>
      </ul>
    
      </div>

  );
};

export default Componysidebar;
