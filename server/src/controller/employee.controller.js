import { Employee } from "../model/employee.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";



const registerEmployee = async(req, res) => {

    try {
        // accept the data from frontend

        const {employeeName, employeeEmail, designation, employeePassword } = req.body;

        // get the admin email from the request
        const {adminEmail} = req.user;

        if(!employeeName || !employeeEmail || !designation || !employeePassword) {

            throw new ApiError(400, "Please provide all the required fields");    
        }

        if(!adminEmail) {
            throw new ApiError(400, "Please provide the admin email");
        }

        // check if the employee already exists

        const existedEmployee = await Employee.findOne({ employeeEmail })


        if(existedEmployee) {
            throw new ApiError(400, "Employee already exists");
        }

        // create a entry in the database 

        const employee = await Employee.create({
            employeeName,
            employeeEmail,
            designation,
            adminEmail,
            employeePassword
        })

        
        return res.status(200).json(
            new ApiResponse(200, "Employee created successfully", employee)
        )
        
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);    
    }

}

