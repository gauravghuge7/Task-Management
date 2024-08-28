import { Client } from "../model/client.model.js";    // modeler client import here
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import bcrypt from "bcrypt";                 // this is the password bcrypt library for hashung the password
import { asyncHandler } from "../utils/asyncHandler.js";



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

const loginClient = asyncHandler(async(req, res) => {
    
    try {
        const { clientEmail, clientPassword } = req.body;
        
        // validate the data 
        if(!clientEmail || !clientPassword) {
            throw new ApiError(400, "Please provide all the required fields");    
        }
        
        // find the entry in the database
        
        const client = await Client.findOne({ clientEmail })
        
        if(!client) {
            throw new ApiError(400, "Client does not exist");
        }
        
        // check if the password is correct
        
        const isPasswordCorrect = await bcrypt.compare(clientPassword, client.clientPassword);
        
        if(!isPasswordCorrect) {
            throw new ApiError(400, "Invalid password");
        }
        
        // generate the access and refresh tokem
        
        const {clientAccessToken, clientRefreshToken} = await createAccessAndRefreshToken(client._id);
        
        
        // return the response 
        
        return res
            .status(200)
            .cookie("clientAccessToken", clientAccessToken, options)
            .cookie("clientRefreshToken", clientRefreshToken, options)
            .json(
                new ApiResponse(200, "Client logged in successfully", client)
            )
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);
    }
})



export {
    registerClient,
    loginClient,
    
}