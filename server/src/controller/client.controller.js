import { client } from "../model/client.model.js";    // modeler client import here
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";




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

        const existedClient = await client.findOne({ clientEmail })


        if(existedClient) {
            throw new ApiError(400, "Client already exists");
        }

        // create a entry in the database 

        const client = await client.create({
            clientName,
            clientEmail,
            clientPassword  ,
            adminEmail
            
        })

        
        return res.status(200).json(                                           // 
            new ApiResponse(200, "Client created successfully", employee)
        )
        
    } 
    catch (error) {
        console.log(" Error => ", error.message)
        throw new ApiError(400, error.message);    
    }

}

