import express from 'express';
import { loginEmployee, registerEmployee } from '../controller/employee.controller.js';
import { verifyAdmin } from '../middleware/Admin.middleware.js';
import {upload} from "../middleware/multer.middleware.js"
import bcrypt from 'bcrypt'

const employeeRouter = express.Router();


employeeRouter.route("/register").post(
    verifyAdmin,
    upload.none(),
    registerEmployee
)


employeeRouter.route("/login").post(
    upload.none(),
    loginEmployee
)


employeeRouter.route("/getEmployeePassword").get(
    
)



export default employeeRouter;