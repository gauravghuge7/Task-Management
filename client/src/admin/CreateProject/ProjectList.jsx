import  { useState } from 'react';
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
      <div className="container mt-5 flex flex-wrap justify-center gap-8">

         {
            projectData.map((data, index) => (

               <div key={index}
                  className='shadow-lg p-3 mb-5 bg-white rounded'
               >
               
               <h2>Project Details</h2>
               <p><strong>Project Name:</strong> {projectData.projectName}</p>
               <p><strong>Company Name:</strong> {projectData.companyName}</p>
               <p><strong>Spokesperson Email:</strong> {projectData.spokePersonEmail}</p>
               <p><strong>Spokesperson Name:</strong> {projectData.spokePersonName}</p>
               <p><strong>Spokesperson Number:</strong> {projectData.teamLead}</p>
               <p><strong>Team Lead</strong> {projectData.spokePersonNumber}</p>
               <p><strong>Description:</strong> {projectData.description}</p>
               <button className="btn btn-primary me-2" onClick={handleEdit}>Edit</button>
               <button className="btn btn-danger" onClick={handleDelete}>Delete</button>

               
               </div>
            ))
         }

         


      </div>
   );
};

export default ProjectList;

