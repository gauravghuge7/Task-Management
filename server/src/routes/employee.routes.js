import express from 'express';
import { registerEmployee } from '../controller/employee.controller.js';
import { verifyAdmin } from '../middleware/Admin.middleware.js';
import {upload} from "../middleware/multer.middleware.js"

const employeeRouter = express.Router();


employeeRouter.route("/register").post(
    verifyAdmin,
    upload.none(),
    registerEmployee
)


employeeRouter.route("/getEmployeePassword").get(
    
)



export default employeeRouter;