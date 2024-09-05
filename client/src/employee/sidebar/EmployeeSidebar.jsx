import React from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const EmployeeSidebar = ({setConditionalComponent, isTeamLead}) => {
  return (
    <div className="d-flex flex-column vh-100 p-3 bg-light">
      <h2 className="mb-4">Employee Panel</h2>
      <hr />
      <Nav className="flex-column">

        <button 
          onClick={() => setConditionalComponent("Contain")} 
          className="mb-2"
        >
          <i className="bi bi-speedometer2"></i> Dashboard
        </button>

        

        <button onClick={() => setConditionalComponent("TaskList")} className="mb-2">
          <i className="bi bi-list-task"></i> Task
        </button>

        {
          isTeamLead && 
          <button onClick={() => setConditionalComponent("teamLead")} className="mb-2">
            <i className="bi bi-list-task"></i> Task
          </button>
        }

      </Nav>
    </div>
  );
};

export default EmployeeSidebar;
