import React, { useState } from 'react'
// import { Navbar } from 'react-bootstrap'
import EmployeeSidebar from '../sidebar/EmployeeSidebar'

import Employeenavbar from '../navbar/Employeenavbar'
import Employeecontain from './Employeecontain'
import Task from '../task/Task'

function Employeedashboard() {

  const [conditionalComponent, setConditionalComponent] = useState("");


  return (
    <>
       <Employeenavbar/>


     <div className="d-flex">
 
      <EmployeeSidebar setConditionalComponent={setConditionalComponent} />
        
        
      <div className="flex-grow-1 p-3">

        {conditionalComponent === "TaskList" && <Task />}
        {conditionalComponent === "Contain" && <Employeecontain/>}

        

      </div>



     </div>
    
    
    
    
    
    
    </>
  )
}

export default Employeedashboard