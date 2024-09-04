import { Admin } from "../model/admin.model.js";
import bcrypt from "bcrypt";                 // this is the password bcrypt library for hashung the password
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";   //using the jwt token for the access and refresh token
import { Team } from "../model/team.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Employee } from "../model/employee.model.js";
import { Client } from "../model/client.model.js";
import mongoose from "mongoose";

    // _id is using the mongoose _id property
const createAccessAndRefreshToken = async (_id) => {

    const admin = await Admin.findById(_id)

     // this token is used for the Access Token

    const adminAccessToken = admin.generateAdminAccessToken();
    const adminRefreshToken = admin.generateAdminRefreshToken();

    admin.adminRefreshToken = adminRefreshToken;

    await admin.save({validateBeforeSave: false});


     // return the response  for frontend 
    return {
        adminAccessToken,
        adminRefreshToken
    } 


}


const options = {

    httpOnly: true,
    secure: true,

}


const registerAdmin = asyncHandler(async (req, res) => {

    try {
        // accept the data from postman

        const {adminName, adminEmail, adminPassword} = req.body;

        // validate the data

        if(!adminName || !adminEmail || !adminPassword) {
            throw new ApiError(400, "Please provide all the required fields");
        }


        // check if the admin already exists

        const existedAdmin = await Admin.findOne({ adminEmail })

        if(existedAdmin) {
            throw new ApiError(400, "Admin already exists");
        }

        // create a entry in the database 

        const admin = await Admin.create({
            adminName,
            adminEmail,
            adminPassword
        })

        admin.save({validateBeforeSave: false});


        // return the response  for frontend

        return res.status(200).json(
            new ApiResponse(200, "Admin created successfully", admin)
        )
        
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }
})


const loginAdmin = asyncHandler(async (req, res) => {

    try {
        // accept the data from frontend

        const {adminEmail, adminPassword} = req.body;

        console.log("req.body => ", req.body)
        
        // validate the data

        if(!adminEmail || !adminPassword) {
            throw new ApiError(400, "Please provide all the required fields");
        }

        // find the entry in the database

        const admin = await Admin.findOne({ adminEmail })

        if(!admin) {
            throw new ApiError(400, "Admin does not exist");
        }

        // check if the password is correct

        const isPasswordCorrect = await bcrypt.compare(adminPassword, admin.adminPassword);

        if(!isPasswordCorrect) {
            throw new ApiError(400, "Invalid password");
        }

        // generate the access and refresh tokem

        const {adminAccessToken, adminRefreshToken} = await createAccessAndRefreshToken(admin._id);

        
        // return the response 

        return res
        .status(200)
        .cookie("adminAccessToken", adminAccessToken, options)
        .cookie("adminRefreshToken", adminRefreshToken, options)
        .json(
            new ApiResponse(200, "Admin logged in successfully", admin)
        )


    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }
})


const logoutAdmin = asyncHandler(async (req, res) => {

    const { _id } = req.user;

    if(!_id) {
        throw new ApiError(400, "Please provide the admin email");
    }

    try {

        // find the entry in the database
        
        const admin = await Admin.findById(_id); 

        admin.adminRefreshToken = null;
        

        await admin.save({validateBeforeSave: false});
        

        return res
            .status(200)
            .clearCookie("adminAccessToken", options)
            .clearCookie("adminRefreshToken", options)
            .json(
                new ApiResponse(200, "Admin logged out successfully")
            )
        
    }
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }


})


const getAdmin = async(req, res) => {
    
    const {adminEmail} = req.user;

    if(!adminEmail) {
        throw new ApiError(400, "Please provide the admin email");
    }

    try {

        
        const admin = await Admin.findById(req.user._id);
        
        return res
            .status(200)
            .json(
                new ApiResponse(200, "Admin fetched successfully", admin)
            )

    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }

}



const getTotalEmployees = async(req, res) => {


    const {adminEmail} = req.user;  // 

    if(!adminEmail) {   // validation 
        throw new ApiError(400, "Please provide the admin email");
    }

    try {
        // accept the data from frontend  that this we are using the try catch block

        const employeeList = await Employee.find({adminEmail});
        
        return res
            .status(200)
            .json(
                new ApiResponse(200, "Total employees", employeeList.length)
            )
        
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }
}


const getTotalEmployeeDetails = async (req, res) => {

    const {adminEmail} = req.user;
    
    if(!adminEmail) {
        throw new ApiError(400, "Please provide the admin email");
    }
    
    try {

        // accept the data from frontend  that this we are using the try catch block
        
        const employeeList = await Employee.find({admin: req.user._id})

        console.log("employeeList => ", employeeList)

        let password = []
        
        const data = employeeList.map((data) => {

            
            
            data.sendToken = jwt.verify(
                data.employeePasswordToken,
                process.env.EMPLOYEE_PASSWORD_TOKEN,
            )
            
        })

        

        const emp = await Employee.find({admin: req.user._id})
        
        console.log("emp => ", emp)
        

        console.log("data => ", data)

        // console.log("password => ", password)

        
        
        
        return res
            .status(200)
            .json(
                new ApiResponse(
                    200, 
                    "Total employee details fetched successfully",
                    employeeList
                )
            )
        
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }

}


const getAllClients = async(req, res) => {

    const {adminEmail} = req.user;
    
    if(!adminEmail) {
        throw new ApiError(400, "Please provide the admin email");
    }
    
    try {
        // accept the data from frontend  that this we are using the try catch block
        
        const clientList = await Client.find({adminEmail});
        
        const passwordToken = process.env.CLIENT_PASSWORD_TOKEN;

        return res
            .status(200)
            .json(
                new ApiResponse(
                    200, 
                    "client list fetched successfully", 
                    {
                        clientList,
                        passwordToken
                    }
                )
            )
        
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }
}


const createTeams = asyncHandler(async (req, res) => {

    try {

        // accept the data from the body 
        console.log("req.body => ", req.body)



        const {teamName, teamLead, projectId, employee, teamId} = req.body;

        // validate the data
        
        if(!teamName || !teamLead || !projectId || !employee) {
            throw new ApiError(400, "Please provide all the required fields");
        }

        // check if the team already exists
        
        const existedTeam = await Team.findOne({ teamId })
        
        if(existedTeam) {
            throw new ApiError(400, "Team already exists");
        }


        /// find the team lead in Employee document
        /// get the mongoDB id of the team lead


        const teamLeadId = await Employee.findOne({employeeName: teamLead})

        console.log("teamLeadId => ", teamLeadId)

        
        const employeeId = await Employee.findOne({employeeName: employee})

        console.log("employeeId => ", employeeId)

        

        // create a entry in the database 
        
        const team = await Team.create({
            teamName,
            teamLead: teamLeadId._id,
            projectId,
            employee: employeeId.id,
            teamId,
            admin: req.user._id
        })

        team.save({validateBeforeSave: false});

        return res  
            .status(200)
            .json(
                new ApiResponse(200, "Team created successfully", team)
            )

        
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }

})



const getAllTeams = async(req, res) => {

    try {

        
        

        const team = await Admin.aggregate([
            {
                $match: {
                    _id: req.user._id
                }
            },

            {
                $lookup: {
                    from: "teams",
                    localField: "_id",
                    foreignField: "admin",
                    as: "teams"
                }
            }
        ])





        return res
        .status(200)
        .json(
            new ApiResponse(200, "Total teams fetched successfully", {team})
        )
        
    } 


    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }


}





export {
    registerAdmin,
    loginAdmin,
    getTotalEmployeeDetails,
    getAllClients,
    getAllTeams,
    createTeams,
    logoutAdmin,
    getAdmin
    
}