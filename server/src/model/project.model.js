import {Schema, model} from 'mongoose';


const projectSchema = new Schema({

   clientEmail: {
      type: Schema.Types.ObjectId,
      ref: 'Client',
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
      required: true,

   },




}, {timestamps: true});


export const Project = model('Project', projectSchema);