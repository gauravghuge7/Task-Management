
import { Route, Routes } from 'react-router-dom'
import Admindashboard from './admin/dashboard/Admindashboard.jsx'
import Login from './admin/login/login.jsx'
// import Employeedashboard from './employee/dashboard/Employeedashboard.jsx'
import './App.css'
// import Dashboard from '  ./company/dashboard/Dashboardcontain.jsx'
import CompanyDashboard from './company/CompanyDashboard/CompanyDashboard.jsx'
import AdminRouter from './router/admin/AdminRouter.jsx'
import CompanyRouter from './router/company/CompanyRouter.jsx'
import EmployeeRouter from './router/employee/EmployeeRouter.jsx'


function App() {


  return (
    <>
    
    
     
      <AdminRouter />
      
      

    </>


  )
}

export default App

