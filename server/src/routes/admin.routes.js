import express from 'express';
import { createTeams, getAllClients, getAllTeams, getTotalEmployeeDetails, loginAdmin, registerAdmin } from '../controller/admin.controller.js';
import { upload } from '../middleware/multer.middleware.js';
import { verifyAdmin } from '../middleware/Admin.middleware.js';

const adminRouter = express.Router();



adminRouter.route("/register").post(

    upload.none(),
    registerAdmin  
)

adminRouter.route("/login").post(
    upload.none(),
    loginAdmin
)


adminRouter.route("/totalEmployees").get(

    verifyAdmin,
    getTotalEmployeeDetails

)


adminRouter.route("/getAllClients").get(
    verifyAdmin,
    getAllClients
)
    

adminRouter.route("/createTeams").post(
    verifyAdmin,
    upload.none(),
    createTeams
)

adminRouter.route("/getAllTeams").get(
    verifyAdmin,
    getAllTeams
)

export default adminRouter;

