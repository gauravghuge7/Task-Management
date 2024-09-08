import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProjectSection = ({setConditionalComponent, projectId}) => {


   const [projects, setProjects] = useState([
      
      {
         projectName: "Project Name",
         clientName: "Client Name",
         description: "Description",   
         spokePersonName: "Spoke Person Name",
         spokePersonNumber: 1234567890,
         spokePersonEmail: "Spoke Person Email",

         projectId: "Project Id",



         changes: [
            {
               change: "Change 1",
               changeDescription: "Change Description 1",
               changeDate: "Change Date 1",
               changeBy: "Change By 1",
               status: "Status 1",
               statusDate: "Status Date 1",
            },
     
         ],
         ticket: [
            {
               ticketNumber: "Ticket Number 1",
               ticketDescription: "Ticket Description 1",
               ticketDate: "Ticket Date 1",
               ticketBy: "Ticket By 1",
               status: "Status 1",
               statusDate: "Status Date 1",
            },
            
         ],
         team: [{
            teamName: "Team Name",
            teamId: "Team Id",
            teamLead: "Team Lead",
         }],
         employeeDetails: {
            employeeName: "Employee Name",
            employeeEmail: "Employee Email",
            designation: "Designation",
            employeePassword: "Employee Password",
         },
      }

   ]);



   const [team, setTeam] = useState([{
      
   }])


   const fetchProjects = async() => {

      console.log("projectId => ", projectId);

      const body = {
         projectId: projectId
      }
      
      const config = {
         headers: {
            'Content-Type': 'multipart/form-data',
         },
         withCredentials: true,
      }


      try {

         const response = await axios.get(`/api/employee/fetchProjectById/${projectId}`, config);

         console.log("response.data => ", response.data);  
         
         
         if(response.data.success === true) {

         //  response.data.data
            setProjects(response.data.data);

         }
         
      } 
      catch (error) {
      
         console.log(error);
      }

   }

   useEffect(() => {

      fetchProjects();

   }, [])




   return (
      <div>

         <button onClick={() => setConditionalComponent("teamLead")}>
            Back
         </button>
         
         <nav className=''>

            <section
               className='shadow-md shadow-gray-500/50 rounded-lg'
            >
               <h2>Project Section</h2>

               <div>
                  { 
                     projects.map((project, index) => (
                        <div key={index}>
                           <h3>{project.projectName}</h3>
                           <p>{project.description}</p>
                           <p>{project.spokePersonName}</p>
                           <p>{project.spokePersonNumber}</p>
                           <p>{project.spokePersonEmail}</p>
                        </div>
                     ))

                  }

               </div>


            </section>


         </nav>

         <main>

            {
               projects.map((project, index) => (

                  <div key={index}>

                     {
                        project.team.map((team, index) => (
                           <div key={index}>
                              <h3>{team.teamName}</h3>
                              <p>{team.teamLead}</p>
                           </div>
                        ))
                     }

                     
                  </div>
               ))
            }

         </main>


         


         
      </div>
   );
}

export default ProjectSection;
