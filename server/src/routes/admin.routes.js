import express from 'express';
import { createTeams, getAllClients, getAllTeams, getTotalEmployeeDetails, loginAdmin, logoutAdmin, registerAdmin } from '../controller/admin.controller.js';
import { upload } from '../middleware/multer.middleware.js';
import { verifyAdmin } from '../middleware/Admin.middleware.js';
import { getEmployeeDetails } from '../controller/admin.pipeline.controller.js';

const adminRouter = express.Router();


// register the admin 
adminRouter.route("/register").post(

    upload.none(),
    registerAdmin  
)

// login the admin 
adminRouter.route("/login").post(
    upload.none(),
    loginAdmin
)

// logout the admin
adminRouter.route("/logout").post(

    verifyAdmin,
    logoutAdmin
)

// get the total employees
adminRouter.route("/totalEmployees").get(
    verifyAdmin,
    getTotalEmployeeDetails

)

// get the total clients
adminRouter.route("/getAllClients").get(
    verifyAdmin,
    getAllClients
)
    
// create the teams
adminRouter.route("/createTeams").post(
    verifyAdmin,
    upload.none(),
    createTeams
)

// get all the teams
adminRouter.route("/getAllTeams").get(
    verifyAdmin,
    getAllTeams
)



/* MongoDB Pipelines Testing Routes */

// adminRouter.route("/totalEmployees").get(
//     verifyAdmin,
//     getEmployeeDetails

// )



export default adminRouter;

