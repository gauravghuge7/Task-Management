import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { message } from "react-message-popup";



const LeadProjects = ({setConditionalComponent, setProjectId}) => {


   const [open, setOpen] = useState(false);
   const dialogRef = useRef();


   const [teams, setTeams] = useState([{

      teamLead: ""

   }]);

   const [projects, setProjects] = useState([

   ]);


   const checkTeamLeadOrNot = async() => {

      try {

         const response = await axios.get(`/api/employee/isTeamLead`);

         console.log(response.data);

         console.log("response.data.data", response.data.data);


         if(response.data.success === true){
            setTeams(response.data.data);

            fetchProjects(response.data.data);
         }
         
      } 
      catch (error) {
         console.log(error);
         message.error("You are not a Team Lead");
      }

   }


   const fetchProjects = async(data) => {

      try {

         const body = {
            teamLead: data.map((team) => team.teamLead)
         }

         const config = {
            headers: {
               'Content-Type': 'application/json',
            },
            withCredentials: true,
         }

         const response = await axios.get(`/api/employee/getTeamLeadProjects`, body, config);
         
         console.log(response.data);

         setProjects(response.data.data[0]?.project)
      } 
      catch (error) {
         console.log(error);
      }

   }

   
   useEffect(() => {
      checkTeamLeadOrNot();
   },[])



   const handleOpen = () => {
      console.log("dialogRef.current => ", dialogRef.current);
      dialogRef.current.showModal();
   }

   const handleProject = (projectId) => {

      setConditionalComponent("viewTeamLeadProject");
      setProjectId(projectId);

   }






   /// give limited access for the employee
   if(teams.length === 0){

      return <div>You Are Not Leading Any project</div>
   }



   return (
      <div>

         <h2 className="text-center mb-8">Projects That You Are Leading</h2>

         <main className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

            {
               projects?.map((project, index) => (
                  <div 
                     key={index}
                     className="mb-3 p-3 w-[25rem] bg-light shadow-md shadow-gray-500/50 rounded-lg"
                  >
                     <h3 className="text-center">{project.clientName}</h3>
                     <h3>{project.projectName}</h3>
                     <p>{project.description}</p>

                     <p>{project._id}</p>

                     <button
                        onClick={handleProject(project._id)}
                     >
                        View Your Work
                     </button>
                  </div>
               ))
            }
         
         </main>


          {/* Dialog box */}
         {
            open && (
               <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div className="flex items-center justify-center min-h-screen text-center px-4">
                  
                     {/* Background overlay */}
                     <div 
                        className="fixed inset-0 bg-gray-800 opacity-50" 
                        aria-hidden="true"
                        onClick={() => setOpen(false)} // close on clicking the background
                     />
         
                     {/* Dialog box */}
                     <dialog
                        open={open}
                        className="relative bg-white z-20 shadow-lg rounded-lg p-6 sm:w-full sm:max-w-md"
                        ref={dialogRef}
                     >
                        {/* Close button */}
                        <button 
                        className="absolute top-2 right-2 text-xl font-bold"
                        onClick={() => setOpen(false)}
                        >
                        X
                        </button>
         
                        {/* Dialog content */}
                        <div className="mt-4">  

                           <h2 className="text-lg font-bold mb-4">Dialog Gaurav Ghuge</h2>
                           <p>This is a dialog from gaurav ghuge</p>
                           <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           </div>
            
                           {/* Optional footer */}
                           <div className="mt-6 flex justify-end">
                           <button 
                              className="bg-red-500 text-white px-4 py-2 rounded-lg"
                              onClick={() => setOpen(false)}
                           >
                              Close
                           </button>
                           
                        </div>
                     </dialog>
                  </div>
               </div>
            )
         }



         
         
      </div>
   );
}

export default LeadProjects;
