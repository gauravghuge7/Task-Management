import express from 'express';
import { registerClient } from '../controller/client.controller.js';

const clientRouter= express.Router();
      

// this is the route for registering a client   

clientRouter.route("/register").post(
    
)


export default clientRouter;