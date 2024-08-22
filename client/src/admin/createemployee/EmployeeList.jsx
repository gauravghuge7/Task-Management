import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/reducers';

const EmployeeList = ({ setValue }) => {

    const [employees, setEmployees] = useState([
        {
            id: 1,
            fullName: 'John Doe',
            email: 'johndoe@gmail.com',
            designation: 'Software Engineer',
            password: 'password123',
        },
        {
            id: 2,
            fullName: 'Jane Doe',
            email: 'janedoe@gmail.com',
            designation: 'Software Engineer',
            password: 'password456',
        },
        {
            id: 3,
            fullName: 'John Smith',
            email: 'johnsmith@gmail.com',
            designation: 'Software Engineer',
            password: 'password789',
        },
        {
            id: 4,
            fullName: 'Jane Smith',
            email: 'janesmith@gmail.com',
            designation: 'Software Engineer',
            password: 'password101',
        },
    ]);

    const dispatch = useDispatch();

    useEffect(() => {       
        dispatch(addEmployee(employees));   
    }, [dispatch, employees]);

    return (
        <div>
            <div className='flex justify-between'>
                <h2 className="mb-4">Employee List</h2>
                <button className=''
                    onClick={() => setValue("createEmployee")}
                >Add Employee</button>
            </div>    

            {employees.length > 0 ? (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{employee.fullName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.designation}</td>
                                <td>{employee.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No employees added yet.</p>
            )}
        </div>
    );
};

export default EmployeeList;
