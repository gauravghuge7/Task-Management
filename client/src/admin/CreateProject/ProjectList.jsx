import { useEffect, useState } from 'react';
import EditProjectForm from './EditProjectForm';
import axios from 'axios';
import {message} from "react-message-popup"

const ProjectList = () => {
   const [isEditing, setIsEditing] = useState(false);
   const [projectData, setProjectData] = useState([
      {
         projectName: 'Example Project',
         clientName: 'Example Company',
         spokePersonEmail: 'example@example.com',
         spokePersonName: 'John Doe',
         spokePersonNumber: '123-456-7890',
         description: 'This is an example project description.',
         team: ['John Doe'],
      },

   ]);



   const getAllProjects = async() => {

      try {
         
         const config = {
            headers: {
               'Content-Type': 'application/json',
            },
         }


         const response = await axios.get("/api/admin/project", config);

         console.log("response => ", response);

         if(response.data.success === true) {
            message.success(response.data.message);
            setProjectData(response?.data?.data?.project);
         }

      } 
      catch (error) {
         console.log(error);
         message.error(error?.message)   
      }
   }




   useEffect(() => {
      getAllProjects();
   }, []);








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
                        <td>{data.clientName}</td>
                        <td>{data.spokePersonEmail}</td>
                        <td>{data.spokePersonName}</td>
                        <td>{data.spokePersonNumber}</td>

                        <td>{data.team?.map(data => data.teamLead)}</td>
                        
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
