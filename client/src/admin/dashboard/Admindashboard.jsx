import  { useState } from 'react'
import AdminNavbar from '../navbar/AdminNavbar'
import Sidebar from '../sidebar/Sidebar'
import Admincontain from './Admincontain'
import NewEmployeeForm from '../createemployee/NewEmployeeForm '
import EmployeeList from '../createemployee/EmployeeList'

function Admindashboard() {

  const [value, setValue] = useState("");


  return (
    <>
    <AdminNavbar/>
    
    
    <div className="d-flex">
    <Sidebar setValue={setValue} />
      <div className="flex-grow-1 p-3">
       {/* <Admincontain/>  */}


       { value === "employee" && <EmployeeList setValue={setValue} /> }
       { value === "dashboard" && <Admincontain /> }
       { value === "createEmployee" && <NewEmployeeForm /> }

      
      </div>
    </div>
    
    
    
    
    </>

  )
}

export default Admindashboard