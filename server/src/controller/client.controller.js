import { Client } from "../model/client.model.js";    // modeler client import here
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import bcrypt from "bcrypt";                 // this is the password bcrypt library for hashung the password



const registerClient = async(req, res) => {

    try {
        // accept the data from frontend  that this we are using the try catch block

        const { clientName, clientEmail, clientPassword } = req.body;

        // get the admin email from the request 
        const {adminEmail} = req.user;

        if(!clientName || !clientEmail  || !clientPassword) {

            throw new ApiError(400, "Please provide all the required fields");    
        }

        if(!adminEmail) {
            throw new ApiError(400, "Please provide the admin email");
        }

        // check if the client already exists

        const existedClient = await Client.findOne({ clientEmail })


        if(existedClient) {
            throw new ApiError(400, "Client already exists");
        }

        // create a entry in the database 

        const client = await Client.create({
            clientName,
            clientEmail,
            clientPassword,
            adminEmail
            
        })

        
        return res
        .status(200).json(                               
            new ApiResponse(200, "Client created successfully", client)
        )
        
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);    
    }

}

const loginClient = async(req, res) => {
    
}



export {
    registerClient
}