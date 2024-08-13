import React from 'react';

const EmployeeList = ({ employees }) => {
    return (
        <div>
            <h2 className="mb-4">Employee List</h2>
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
