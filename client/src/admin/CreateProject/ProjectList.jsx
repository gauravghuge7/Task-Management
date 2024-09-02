import { useState } from 'react';
import EditProjectForm from './EditProjectForm';

const ProjectList = () => {
   const [isEditing, setIsEditing] = useState(false);
   const [projectData, setProjectData] = useState([
      {
         projectName: 'Example Project',
         companyName: 'Example Company',
         spokePersonEmail: 'example@example.com',
         spokePersonName: 'John Doe',
         spokePersonNumber: '123-456-7890',
         description: 'This is an example project description.',
         teamLead: 'John Doe',
      },
      {
         projectName: 'Example Project',
         companyName: 'Example Company',
         spokePersonEmail: 'example@example.com',
         spokePersonName: 'John Doe',
         spokePersonNumber: '123-456-7890',
         description: 'This is an example project description.',
         teamLead: 'John Doe',
      },
      {
         projectName: 'Example Project',
         companyName: 'Example Company',
         spokePersonEmail: 'example@example.com',
         spokePersonName: 'John Doe',
         spokePersonNumber: '123-456-7890',
         description: 'This is an example project description.',
         teamLead: 'John Doe',
      },
   ]);

   const handleEdit = () => {
      setIsEditing(true);
   };

   const handleDelete = () => {
      // Handle delete logic here (e.g., API call)
      console.log('Project deleted');
   };

   const handleSave = (updatedData) => {
      setProjectData(updatedData);
      setIsEditing(false);
   };

   if (isEditing) {
      return <EditProjectForm projectData={projectData} onSave={handleSave} />;
   }

   return (
      <div className="container mt-5">
         <h2 className="mb-4">Project List</h2>
         <table className="table table-striped table-bordered">
            <thead>
               <tr>
                  <th>Project Name</th>
                  <th>Company Name</th>
                  <th>Spokesperson Email</th>
                  <th>Spokesperson Name</th>
                  <th>Spokesperson Number</th>
                  <th>Team Lead</th>
                  <th>Description</th>
                  <th>Actions</th>
               </tr>
            </thead>
            <tbody>
               {
                  projectData.map((data, index) => (
                     <tr key={index}>
                        <td>{data.projectName}</td>
                        <td>{data.companyName}</td>
                        <td>{data.spokePersonEmail}</td>
                        <td>{data.spokePersonName}</td>
                        <td>{data.spokePersonNumber}</td>
                        <td>{data.teamLead}</td>
                        <td>{data.description}</td>
                        <td>
                           <button className="btn btn-primary me-2" onClick={handleEdit}>Edit</button>
                           <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                        </td>
                     </tr>
                  ))
               }
            </tbody>
         </table>
      </div>
   );
};

export default ProjectList;
