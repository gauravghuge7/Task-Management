import {Schema, model} from 'mongoose';

const ClientSchema = new Schema({

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


export const Client = model('Client', ClientSchema);