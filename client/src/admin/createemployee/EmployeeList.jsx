import React, { useState } from 'react';

const EmployeeList = ({setValue}) => {


    const [employees, setEmployees] = useState([
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            designation: 'Software Engineer',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Doe', 
            email: 'janedoe@gmail.com',
            designation: 'Software Engineer',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 3,
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            designation: 'Software Engineer',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 4,
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'janedoe@gmail.com',
            designation: 'Software Engineer',
            createdAt: new Date(),
            updatedAt: new Date()
        },
    ]);



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
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.designation}</td>
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
