import { Employee } from "../model/employee.model.js";
import { Project } from "../model/project.model.js";
import { Team } from "../model/team.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";
import bcrypt from 'bcrypt'



const createAccessAndRefreshToken = async (_id) => {
    
    const employee = await Employee.findById(_id)
    
    // this token is used for the Access Token
    
    const employeeAccessToken = employee.generateEmployeeAccessToken();
    const employeeRefreshToken = employee.generateEmployeeRefreshToken();
    
    employee.employeeRefreshToken = employeeRefreshToken;
    
    await employee.save({validateBeforeSave: false});
    
    return {
        employeeAccessToken,
        employeeRefreshToken
    }
    
}

const options = {
    
    httpOnly: true,
    secure: true,
    
}



const registerEmployee = asyncHandler(async(req, res) => {

    const {_id} = req.user;

    try {
        // accept the data from frontend  that this we are using the try catch block

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
            employeePassword,
            admin: _id,
            isTeamLeader: false
        })

        
        return res.status(200).json(                                           // 
            new ApiResponse(200, "Employee created successfully", employee)
        )
        
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);    
    }

})

const loginEmployee = asyncHandler(async(req, res) => {

    try {
        // accept the data from frontend  that this we are using the try catch block
        
        const { employeeEmail, employeePassword } = req.body;
        
        
        // validate the data 
        if(!employeeEmail || !employeePassword) {
            throw new ApiError(400, "Please provide all the required fields");    
        }

        // find the entry in the database

        const employee = await Employee.findOne({ employeeEmail })
        
        if(!employee) {
            throw new ApiError(400, "Employee does not exist");
        }
        
        // check if the password is correct

        const isPasswordCorrect = await bcrypt.compare(employeePassword, employee.employeePassword);

        if(!isPasswordCorrect) {
            throw new ApiError(400, "Invalid password");
        }

        // generate the access and refresh tokem

        const {employeeAccessToken, employeeRefreshToken} = await createAccessAndRefreshToken(employee._id);

        
        // return the response 

        return res
        .status(200)
        .cookie("employeeAccessToken", employeeAccessToken, options)
        .cookie("employeeRefreshToken", employeeRefreshToken, options)
        .json(
            new ApiResponse(200, "Employee logged in successfully", employee)
        )
        
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }

})


const logoutEmployee = asyncHandler(async(req, res) => {
    
    try {
        
        const {_id} = req.user;
        
        if(!_id) {
            throw new ApiError(400, "Please provide the employee email");
        }
        
        
        // find the entry in the database
        
        const employee = await Employee.findById(_id);
        
        if(!employee) {
            throw new ApiError(400, "Employee does not exist");
        }   
        
        employee.employeeRefreshToken = null;
        
        await employee.save({validateBeforeSave: false});
        
        return res
            .status(200)
            .clearCookie("employeeAccessToken", options)
            .clearCookie("employeeRefreshToken", options)
            .json(
                new ApiResponse(200, "Employee logged out successfully")
            )
        
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }
    
})



const getEmployeeDetails = async(req, res) => {

    try {
        // accept the data from frontend  that this we are using the try catch block
        
        const {_id} = req.user;
        
        const employee = await Employee.findById(_id);
        
        if(!employee) {
            throw new ApiError(400, "Employee does not exist");
        }
        
        // return the response 
        return res
            .status(200)
            .json(
                new ApiResponse(200, "Employee Details fetched successfully", employee)
            )
        
    } 
    catch (error) {
        
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }
    
}



const getEmployeePassword = asyncHandler(async(req, res) => {

    try {

        
        
        
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }

})
  
const employeelogout = asyncHandler(async(req, res) => {
    
    try {
        
        const {_id} = req.user;
        
        if(!_id) {
            throw new ApiError(400, "Please provide the employee email");
        }
        
        
        // find the entry in the database
        
        const employee = await Employee.findById(_id);
        
        if(!employee) {
            throw new ApiError(400, "Employee does not exist");
        }   
        
        employee.employeeRefreshToken = null;
        
        await employee.save({validateBeforeSave: false});
        
        return res
            .status(200)
            .clearCookie("employeeAccessToken", options)
            .clearCookie("employeeRefreshToken", options)
            .json(
                new ApiResponse(200, "Employee logged out successfully")
            )
        
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }
    
})


const getTeamLeadOrNot = asyncHandler(async(req, res) => {

    try {

        const {_id} = req.user;
        
        if(!_id) {
            throw new ApiError(400, "Please provide the employee email");
        }
        
        
        // find the entry in the database
        
        const employee = await Employee.findById(_id);
        
        if(!employee) {
            throw new ApiError(400, "Employee does not exist");
        }

        // find the entry in a team as the teamLead
        
        const teamLead = await Team.find({employee: employee._id})
        
        if(teamLead.length === 0) {
            
            return res
                .status(200)
                .json(
                    new ApiResponse(200, "Employee Teams fetched successfully", [])
                )
        }
        
        // return the response 
        return res
            .status(200)
            .json(
                new ApiResponse(200, "Employee Projects fetched successfully", teamLead)
            )

        
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }

})


const getTeamLeadProjects = asyncHandler(async(req, res) => {

    const { teamLead } = req.body;

    console.log("req.body => ", req.body)



    try {

        const projects = await Team.aggregate([
            {
                $match: {
                    teamLead: new mongoose.Types.ObjectId(req.user._id)
                }
            },
            {
                $lookup: {
                    from: "projects",
                    localField: "_id",
                    foreignField: "team",
                    as: "project",
                }

            },
            {
                $addFields: {
                    project: "$project"
                }
            },
            {
                $project: {
                    project: 1,
                }
            }
        ])


        return res
            .status(200)
            .json(
                new ApiResponse(200, "Team Lead Projects fetched successfully", projects)
            )
        
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }

})



const getEmployeeProjects = asyncHandler(async(req, res) => {
    
    try {

        const {_id} = req.user;

        if(!_id) {
            throw new ApiError(400, "Please provide the employee email");
        }

        const employee = await Employee.findById(_id);

        if(!employee) {
            throw new ApiError(400, "Employee does not exist");
        }

        // find the entry in a team as the teamLead
        
        // const teams = await Team.find({employee: employee._id})
        

        // const projects = await Project.aggregate([

        //     {
        //         $match: {
        //             team: teams.map(data => new mongoose.Types.ObjectId(data._id))
        //         }
        //     },

        // ])
        



        /// alter method for above code 


        const projects = await Team.aggregate([

            {
                $match: {
                    employee: new mongoose.Types.ObjectId(employee._id)
                }
            },
            {
                $lookup: {
                    from: "projects",
                    localField: "_id",
                    foreignField: "team",
                    as: "project",

                    pipeline: [
                        {
                            $lookup: {
                                from: "teams",
                                localField: "team",
                                foreignField: "_id",
                                as: "team",
                            }
                        },
                        {
                            $addFields: {
                                team: "$team.teamName",
                                teamId: "$team._id",
                            }
                        }
                    ]
                }
            },
            {
                $addFields: {
                    project: "$project"
                }
            },
            {
                $project: {
                    project: 1,
                }
            }
        ])


        return res
            .status(200)
            .json(
                new ApiResponse(200, "Employee Projects fetched successfully", projects)
            )
        
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }
})



const fetchProjectById = asyncHandler(async(req, res) => {
    
    try {
        
        const { projectId } = req.params;
        
        console.log("req.body => ", req.body);
        console.log("req.params => ", req.params);
        console.log("req.query => ", req.query);


        if(!projectId) {
            throw new ApiError(400, "Please provide the project id");
        }


        const project = await Project.aggregate([

            // Match the specific project
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(projectId)
                }
            },
        
            // Fetch the team and the associated employees with all their details
            {
                $lookup: {
                    from: "teams",
                    localField: "team",
                    foreignField: "_id",
                    as: "team",
                    pipeline: [
                        // Lookup employees for each team
                        {
                            $lookup: {
                                from: "employees",
                                localField: "employee", // assuming 'team.employee' stores employee IDs
                                foreignField: "_id",
                                as: "employeeDetails"
                            }
                        },
        
                        // Include all employee details
                        {
                            $addFields: {
                                employeeDetails: "$employeeDetails"  // Keep all employee details in the result
                            }
                        },

                        {
                            $lookup: {
                                from: "employees",
                                localField: "teamLead",
                                foreignField: "_id",
                                as: "teamLeadDetails"
                            }
                        },

                        {
                            $addFields: {
                                teamLeadDetails: ["$teamLeadDetails", 0]
                            }
                        }
                    ]
                }
            },
        
            // Fetch the client information
            {
                $lookup: {
                    from: "clients",
                    localField: "client",
                    foreignField: "_id",
                    as: "client",
                }
            },
        
            // Fetch the tasks for the project
            {
                $lookup: {
                    from: "tasks",
                    localField: "_id",
                    foreignField: "project",
                    as: "task",
                }
            },
        
            // Fetch the tickets for the project
            {
                $lookup: {
                    from: "tickets",
                    localField: "_id",
                    foreignField: "project",
                    as: "ticket",
                }
            },
        
            // Final projection to specify which fields you want to include in the result
            {
                $project: {
                    admin: 1,
                    clientName: 1,
                    clientEmail: 1,
                    client: 1,
                    spokePersonEmail: 1,
                    spokePersonName: 1,
                    spokePersonNumber: 1,
                    projectId: 1,
                    projectName: 1,
                    description: 1,
                    descriptionDocument: 1,
                    changes: 1,
                    ticket: 1,
                    team: 1,  // The full team data with all employee details
                    client: 1,  // Client details as well
                    task: 1,  // All task details
                    ticket: 1,  // All ticket details
                }
            }
        ]);
        
        

      
        return res
            .status(200)
            .json(
                new ApiResponse(200, "Project fetched successfully", project)
            )

        
      
        
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }
    
})







export {
    registerEmployee,
    loginEmployee,
    logoutEmployee,
    getEmployeeDetails,
    getEmployeePassword,
    getEmployeeProjects,


    getTeamLeadOrNot,
    getTeamLeadProjects

}