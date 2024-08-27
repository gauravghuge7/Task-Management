import express from 'express';
import { registerClient } from '../controller/client.controller.js';
import { verifyAdmin } from '../middleware/Admin.middleware.js';
import { upload } from '../middleware/multer.middleware.js';

const clientRouter= express.Router();


clientRouter.route("/register").post(
   verifyAdmin,
   upload.none(),
   registerClient
)


export default clientRouter;