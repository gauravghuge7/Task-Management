import React from 'react'
import AdminNavbar from '../navbar/AdminNavbar'
import Sidebar from '../sidebar/Sidebar'
// import Admincontain from './Admincontain'
import NewEmployeeForm from '../createemployee/NewEmployeeForm '
// import EmployeeList from '../createemployee/EmployeeList'

function Admindashboard() {
  return (
    <>
    <AdminNavbar/>
    
    
    <div className="d-flex">
    <Sidebar/>
      <div className="flex-grow-1 p-3">
       {/* <Admincontain/>  */}
      <NewEmployeeForm/>
      {/* <EmployeeList/> */}
      </div>
    </div>
    
    
    
    
    </>

  )
}

export default Admindashboard