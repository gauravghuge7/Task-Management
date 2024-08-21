import  { useState } from 'react'

import Componynavabar from '../navbar/Componynavabar'
import Componysidebar from '../sidebar/Componysidebar'
import Dashboard from '../dashboard/Dashboardcontain'
import Tasklist from '../task/Tasklist'
import TaskForm from '../task/Taskform'

function CompanyDashboard() {

  const [conditionalComponent, setConditionalComponent] = useState("");


  return (
    <>
       <Componynavabar/>


     <div className="d-flex">
 
      <Componysidebar setConditionalComponent={setConditionalComponent} />
        
        
      <div className="flex-grow-1 p-3">

        {conditionalComponent === "CompanyDashboard" && <Dashboard />}
        {conditionalComponent === "CompanyTasks" && <Tasklist setConditionalComponent={setConditionalComponent} />}
        {conditionalComponent === "addTask" && <TaskForm />}
        

      </div>



     </div>
    
    
    
    
    
    
    </>
  )
}

export default CompanyDashboard