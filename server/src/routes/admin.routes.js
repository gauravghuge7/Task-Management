import express from 'express';
import { getTotalEmployeeDetails, loginAdmin, registerAdmin } from '../controller/admin.controller.js';
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
    


export default adminRouter;

