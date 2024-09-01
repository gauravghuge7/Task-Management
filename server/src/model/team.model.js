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
      type: Schema.Types.ObjectId,
      ref: "Employee"
   },

   projectId: [{
      type: String,
      required: true,
   }],

   employee: [{
      type: Schema.Types.ObjectId,
      ref: "Employee"
   }],



}, {timestamps: true});


export const Team = model('Team', teamSchema);