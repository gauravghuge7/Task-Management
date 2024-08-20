import { Route, Routes } from "react-router-dom"
import Admindashboard from "../../admin/dashboard/Admindashboard";
import Home from "../../views/home/Home";
import CompanyDashboard from "../../company/CompanyDashboard/CompanyDashboard";
import Employeedashboard from "../../employee/dashboard/Employeedashboard";

const AdminRouter = () => {
  return (
    <Routes>

        <Route path="/admin/dashboard" element={Admindashboard} />
        <Route path="/company/dashboard" element={<CompanyDashboard />} />
        <Route path="/employee/dashboard" element={<Employeedashboard   />} />



        <Route path='/' element={<Home />} />


    </Routes>
  );
};  

export default AdminRouter;