import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';  

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [teamLead, setTeamLead] = useState('');
  const [startDate, setStartDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Project Name:', projectName);
    console.log('Team Lead:', teamLead);
    console.log('Project Start Date:', startDate);
    console.log('Description:', description);
  };

  return (
    <div className="container mt-5">
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            className="form-control"
            id="projectName"
            placeholder="Enter project name" 
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="teamLead">Team Lead</label>
          <input
            type="text"
            className="form-control"
            id="teamLead"
            placeholder="Enter team lead name"
            value={teamLead}
            onChange={(e) => setTeamLead(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Project Start Date</label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Enter project description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Create Project
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
