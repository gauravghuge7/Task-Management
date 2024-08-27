import express from 'express';
import { loginAdmin, registerAdmin } from '../controller/admin.controller.js';
import { upload } from '../middleware/multer.middleware.js';

const adminRouter = express.Router();



adminRouter.route("/register").post(

    upload.none(),
    registerAdmin
)

adminRouter.route("/login").post(
    upload.none(),
    loginAdmin
)


export default adminRouter

