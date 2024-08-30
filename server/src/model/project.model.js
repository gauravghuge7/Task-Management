import {Schema, model} from 'mongoose';


const projectSchema = new Schema({

   // clientEmail: {
   //    type: Schema.Types.ObjectId,
   //    ref: 'Client',
   // },

   clientEmail: {
      type: String,
      required: true,
   },

   projectId: {
      type: String,
      required: true,

   },


   projectName: {
      type: String,
      required: true,

   },

   projectTeamLead: {
      type: String,
      // required: true,

   },

   teamId: {
      type: String,

   },

   description: {
      type: String,
      required: true,
   },



}, {timestamps: true});


export const Project = model('Project', projectSchema);