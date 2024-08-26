import mongoose from 'mongoose';
import {MONGODB_URI} from "../constant.js";



const connectDB = async () => {

   try {

      const connect = await mongoose.connect(process.env.MONGODB_URI, {
     
      });

      console.log(` MongoDB connected successfully: ${connect.connection.host}`);
      
   } 
   catch (error) {
      
      console.log(error);
      process.exit(1);
   }
}


export default connectDB;