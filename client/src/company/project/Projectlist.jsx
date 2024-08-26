
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

     

const Projectlist = ({ setConditionalComponent }) => {
  const [projects, setProjects] = useState([

      {
          id: 1,
          name: "ABC Project",
          teamLead: "John Doe",
          startDate: "2022-01-01",
          description: "Project Description"
      },
      {
          id: 2,
          name: "XYZ Project",
          teamLead: "John Doe",
          startDate: "2022-01-01",
          description: "Project Description"
      },
  ]); 

  useEffect(() => { 
    console.log('Project List Data Fetched:', projects);
  }, [projects]);

  return (
    <div className="container mt-5">
    <div className='flex justify-between'>
                <h2 className="mb-4">Project List</h2>
                <button className=''
                    onClick={() => setConditionalComponent("projectform")}
                >Add New Project</button>
            </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Project Name</th>
            <th>Team Lead</th>
            <th>Start Date</th>
            <th>Description</th> 
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.name}</td>
              <td>{project.teamLead}</td>
              <td>{project.startDate}</td>
              <td>{project.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projectlist;
