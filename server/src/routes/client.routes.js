import express from 'express';
import { loginClient, registerClient } from '../controller/client.controller.js';
import { verifyAdmin } from '../middleware/Admin.middleware.js';
import { upload } from '../middleware/multer.middleware.js';

const clientRouter= express.Router();
      

// this is the route for registering a client   

clientRouter.route("/register").post(
   verifyAdmin,
   upload.none(),
   registerClient
)

clientRouter.route("/login").post(
   upload.none(),
   loginClient
)



export default clientRouter;