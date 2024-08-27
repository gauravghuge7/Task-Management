import express from 'express';
import { registerClient } from '../controller/client.controller.js';

const clientRouter= express.Router();


clientRouter.route("/register").post(
    
)


export default clientRouter;