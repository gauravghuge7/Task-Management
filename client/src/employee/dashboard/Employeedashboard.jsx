import React from 'react'
import { Navbar } from 'react-bootstrap'
import EmployeeSidebar from '../sidebar/EmployeeSidebar'

import Employeenavbar from '../navbar/Employeenavbar'
import Employeecontain from './Employeecontain'

function Employeedashboard() {
  return (
    <>
       <Employeenavbar/>
     <div className="d-flex">
 
     <EmployeeSidebar />
        
        
        <div className="flex-grow-1 p-3">
        <Employeecontain/>
        </div>



     </div>
    
    
    
    
    
    
    </>
  )
}

export default Employeedashboard