import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Componysidebar = ({ setConditionalComponent }) => {
  return (
    <div className="d-flex flex-column vh-100 p-3 bg-dark text-white" style={{ width: '250px' }}>
      <h3 className="mb-4">Company Panel</h3>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <button 
            onClick={() => setConditionalComponent('CompanyDashboard')} 
            className="nav-link text-white">
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </button>
        </li>
        <li className="nav-item">
          <button 
            id="project-button" 
            onClick={() => setConditionalComponent('Projectlist')} 
            className="nav-link text-white">
            <i className="bi bi-folder me-2"></i> Projects
          </button>
        </li>
        <li className="nav-item">
          <button 
            id="tasks-button" 
            onClick={() => setConditionalComponent('CompanyTasks')} 
            className="nav-link text-white">
            <i className="bi bi-list-task me-2"></i> Tasks
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Componysidebar;
