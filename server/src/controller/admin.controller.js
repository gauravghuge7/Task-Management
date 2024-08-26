import { Admin } from "../model/admin.model.js";
import bcrypt from 'bcrypt';
import { ApiResponse } from "../utils/ApiResponse.js";


const createAccessAndRefreshToken = async (_id) => {

    const admin = await Admin.findById(_id)

    const adminAccessToken = admin.generateAdminAccessToken();
    const adminRefreshToken = admin.generateAdminRefreshToken();

    admin.adminRefreshToken = adminRefreshToken;

    await admin.save({validateBeforeSave: false});

    return {
        adminAccessToken,
        adminRefreshToken
    }


}


const options = {

    httpOnly: true,
    secure: true,

}


const registerAdmin = async (req, res) => {

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


        // return the response 

        return res.status(200).json(
            new ApiResponse(200, "Admin created successfully", admin)
        )
        
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }
}


const loginAdmin = async (req, res) => {

    try {
        // accept the data from frontend

        const {adminEmail, adminPassword} = req.body;
        
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
}


export {
    registerAdmin,
    loginAdmin
}