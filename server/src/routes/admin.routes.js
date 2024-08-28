import express from 'express';
import { loginAdmin, registerAdmin } from '../controller/admin.controller.js';

const adminRouter = express.Router();



adminRouter.route("/register").post(
    registerAdmin
)

adminRouter.route("/login").post(
    loginAdmin
)


export default adminRouter;

