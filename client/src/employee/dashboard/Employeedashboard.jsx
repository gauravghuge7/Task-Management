import { useEffect, useState } from 'react'
// import { Navbar } from 'react-bootstrap'
import EmployeeSidebar from '../sidebar/EmployeeSidebar'

import Employeenavbar from '../navbar/Employeenavbar'
import Employeecontain from './Employeecontain'
import Task from '../task/Task'
import axios from 'axios'
import { message } from 'react-message-popup'
import LeadProjects from '../TeamLead/LeadProjects'
import EmpProjects from '../EmployeeProjects/EmpProjects'

function Employeedashboard() {

  const [conditionalComponent, setConditionalComponent] = useState("");


  


  const getEmployeeDetails = async() => {
    try {
      const response = await axios.get('/api/employee/getEmployeeDetails');
      console.log("response => ", response);

      if(response.data.success === true) {
        message.success(response.data.message);


      }
      
    
    } 
    catch (error) {
      message.error(error.message);  
    }
  }


  useEffect(() => {
    getEmployeeDetails();
  },[])



  return (
    <>
      <Employeenavbar/>


    <div className="d-flex">

      <EmployeeSidebar setConditionalComponent={setConditionalComponent} />
        
        
      <div className="flex-grow-1 p-3">

        {conditionalComponent === "TaskList" && <Task />}
        {conditionalComponent === "" && <Employeecontain/>}
        {conditionalComponent === "Contain" && <Employeecontain/>}

        {conditionalComponent === "projects" && <EmpProjects/>}



        {conditionalComponent === "teamLead" && <LeadProjects/>}

        {conditionalComponent === "viewTeamLeadProject" && <Task />}
      

        

      </div>



    </div>
    
    
    
    
    
    
    </>
  )
}

export default Employeedashboard