import  { useState } from 'react'
import AdminNavbar from '../navbar/AdminNavbar'
import Sidebar from '../sidebar/Sidebar'
import Admincontain from './Admincontain'
import NewEmployeeForm from '../createemployee/NewEmployeeForm '
import EmployeeList from '../createemployee/EmployeeList'
import TeamList from '../createteam/TeamList' 
import CreateTeamForm from '../createteam/CreateTeamForm'
import CompanyList from '../createcompony/CompanyList'
import CreateCompany from '../createcompony/Createcomponyform'
import AssignTaskForm from '../assigntask/AssignTaskForm'
import TaskList from '../assigntask/TaskList'

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
        { value === "team" && <TeamList  setValue={setValue} /> }
        { value === "creteteam" && <CreateTeamForm /> }
        {value === "compony" && <CompanyList setValue={setValue} /> }
        { value === "createcompany" && <CreateCompany /> }
        {value === "assigntask" && <AssignTaskForm /> }
        { value === "task" && <TaskList setValue={setValue} /> }
      
      </div>
    </div>
    
    
    
    
    </>

  )
}

export default Admindashboard