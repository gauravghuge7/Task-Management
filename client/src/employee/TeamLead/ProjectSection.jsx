import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProjectSection = ({setConditionalComponent, projectId}) => {


   const [projects, setProjects] = useState([
      
      {
         projectName: "Project Name",
         clientName: "Client Name",
         description: "Description",   
         _id: projectId
      }

   ]);


   const fetchProjects = async() => {

      const body = {
         projectId: projectId
      }
      
      const config = {
         headers: {
            'Content-Type': 'application/json',
         },
         withCredentials: true,
      }


      try {

         const response = await axios.get("/api/employee/getProjectById", body, config );

         console.log("response.data => ", response.data);   
         
      } 
      catch (error) {
      
         console.log(error);
      }

   }

   // useEffect(() => {

   //    fetchProjects();

   // }, [])




   return (
      <div>

         <button onClick={() => setConditionalComponent("teamLead")}>
            Back
         </button>
         <nav className='flex justify-around'>

            <section
               className='shadow-md shadow-gray-500/50 rounded-lg'
            >
               <h2>Project Section</h2>


            </section>

            <section
               className='shadow-md shadow-gray-500/50 rounded-lg'
            >
               <h2>Team Section</h2>

            </section>
         
         </nav>


         


         
      </div>
   );
}

export default ProjectSection;
