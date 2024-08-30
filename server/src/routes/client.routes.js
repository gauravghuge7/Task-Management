import express from 'express';
import { createProject, fetchProjects, loginClient, registerClient } from '../controller/client.controller.js';
import { verifyAdmin } from '../middleware/Admin.middleware.js';
import { upload } from '../middleware/multer.middleware.js';
import { verifyclient } from '../middleware/Compony.middleware.js';

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

clientRouter.route("/createProject").post( //verify client
   verifyclient,
   upload.none(),
   createProject
)


clientRouter.route("/fetchProjects").get( //verify client   
   verifyclient,   
   fetchProjects
)  


export default clientRouter;