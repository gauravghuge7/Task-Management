import  { useEffect, useState } from 'react'
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
import { message } from 'react-message-popup'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../redux/reducers'
import ProjectList from '../CreateProject/ProjectList'



function Admindashboard() {

    const [value, setValue] = useState(""); 

    const dispatch = useDispatch();

    
  const fetchEmployees = async() => {
    try {

      const response = await axios.get('/api/admin/totalEmployees');
      
      console.log("response => ", response);

      if(response.data.success === true) {
        message.success('Employees fetched successfully');
        dispatch(addEmployee(response.data.data));
      }
    
    } 
    catch (error) {
      message.error(error.message);  
    }
  }

  
  const fetchCompanies = async () => {
    try {
        
        const response = await axios.get("/api/admin/getAllClients")


        if(response.data.success){
            message.success(response.data.message);
  
        }

    } 
    catch (error) {
        message.error(error.message);
    }
  }



  useEffect(() => {

    fetchEmployees();

  },[])


    


  return (
    <>
    <AdminNavbar/>
     
    
    <div className="d-flex">
    <Sidebar setValue={setValue} />
      <div className="flex-grow-1 p-3">
      


      { value === "employee" && <EmployeeList setValue={setValue}  /> }
      { value === "" && <Admincontain /> }
      { value === "dashboard" && <Admincontain /> }
      { value === "createEmployee" && <NewEmployeeForm fetchEmployees={fetchEmployees}  /> }
      { value === "team" && <TeamList  setValue={setValue} /> }
      { value === "createteam" && <CreateTeamForm /> }
      {value === "compony" && <CompanyList setValue={setValue} /> }
      { value === "createcompany" && <CreateCompany /> }
      {value === "assigntask" && <AssignTaskForm /> }
      { value === "task" && <TaskList setValue={setValue} /> }
      { value === "project" && <ProjectList setValue={setValue} /> }
    
      </div>
    </div>
    
    
    
    
    
    </>

  )
}

export default Admindashboard

