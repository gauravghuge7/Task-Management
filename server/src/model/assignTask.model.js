import {Schema, model} from 'mongoose';

const taskSchema = new Schema({

   projectName: {
      type: String,
      required: true,
   },

   employeeEmail: {
      type: String,
      required: true,

   },

   projectId: {
      type: String,
      required: true,
   },

   task: {
      type: String,
      required: true,
   },

   clientName: {
      type: String,
      required: true,
   },

   teamLead: {
      type: String,
      required: true,
   },

   description: {
      type: String,
      
   }



});

export const Task = model('Task', taskSchema);