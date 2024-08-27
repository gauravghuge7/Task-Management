import {Schema, model} from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const clientSchema = new Schema({

   clientName: {
      type: String,
      required: true,
   },

   adminEmail: {
      type: String,
      required: true,
   },
   
   clientEmail: {
      type: String,
      required: true,
   },
   
   clientPassword: {
      type: String,
      required: true,
   },




}, {timestamps: true});


clientSchema.methods = {

   generateclientAccessToken: function() {

      return jwt.sign(
         {
            _id: this._id,
             clientEmail: this.clientEmail,
         },
         process.env.CLIENT_ACCESS_SECRET_KEY,      //need to be changed the very time 

         {
            expiresIn: '24h'
         }
      
      )

   },

   generateclientRefreshToken: function() {

      return jwt.sign(
         {
            _id: this._id,
            clientEmail: this.clientEmail,
            clientName: this.clientName,
            adminEmail: this.adminEmail,
         },
         process.env.CLIENT_REFRESH_SECRET_KEY,            //   nedd to be changed the every time 
                                                          
      
         {
            expiresIn: '7d'
         }
      )
   },





}

clientSchema.pre('save', async function() {

   if(this.isModified('clientPassword')) {

      this.clientPassword = await bcrypt.hash(this.clientPassword, 10)
   }
})




export const Client = model('Client', clientSchema);