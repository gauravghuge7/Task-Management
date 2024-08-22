import {Schema, model} from 'mongoose';


const AdminSchema = new Schema({

   adminEmail: {
      type: String,
      required: true,
   },

   adminPassword: {
      type: String,
      required: true,
   },

   adminName: {
      type: String,
      required: true,
   },



}, {timestamps: true});


export const Admin = model('Admin', AdminSchema);