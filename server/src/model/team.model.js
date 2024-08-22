import {Schema, model} from 'mongoose';


const teamSchema = new Schema( {

   teamName: {
      type: String,
      required: true,
   },

   teamId: {
      type: String,
      required: true,
   },

   teamLead: {
      type: String,
      required: true,
   },

   projectId: [{

      type: String,
      required: true,

   }],

   employeeEmail: [{

      type: String,
      required: true,

   }]



}, {timestamps: true});


export const Team = model('Team', teamSchema);