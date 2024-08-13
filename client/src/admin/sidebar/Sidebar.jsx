
import { Link } from 'react-router-dom';
import './Sidebar.css'; // You can customize styles here
import 'bootstrap/dist/css/bootstrap.min.css';
function Sidebar({ setValue }) {


  




  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '250px', height: '100vh' }}>
      <h4 className="text-center">Admin Panel</h4>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">

          <button 
            className="nav-link " 
            aria-current="page"
            onClick={() => setValue("dashboard")}
          >
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </button>

        </li>
        <li>
          <button 
          
            className="nav-link"
            onClick={() => setValue("employee")}  
          >
            <i className="bi bi-person-lines-fill me-2"></i>
          Employee
                  
          </button>
        </li>
        <li>
          <Link to="/team" className="nav-link">
            <i className="bi bi-people-fill me-2"></i>
            Team
          </Link>
        </li>
        <li>
          <Link to="/company" className="nav-link">
            <i className="bi bi-building me-2"></i>
            Company
          </Link>
        </li>
        <li>
          <Link to="/project" className="nav-link">
            <i className="bi bi-kanban me-2"></i>
            Project
          </Link>
        </li>
        <li>
          <Link to="/assign-team" className="nav-link">
            <i className="bi bi-person-plus-fill me-2"></i>
            Assign Team
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default Sidebar;
