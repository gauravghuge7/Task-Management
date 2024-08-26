import express from 'express';
import employeeRouter from '../routes/employee.routes.js';
import adminRouter from '../routes/admin.routes.js';


const allRouter = express.Router();



allRouter.use("/employee", employeeRouter);

allRouter.use("/admin", adminRouter);





export default allRouter;
