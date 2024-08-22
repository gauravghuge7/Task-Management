import {Schema, model} from 'mongoose';


const EmployeeSchema = new Schema({

   employeeName: {
      type: String,
      required: true,
   },

   adminEmail: {
      type: String,
      required: true,
   },

   employeeEmail: {
      type: String,
      required: true,
   },

   employeePassword: {
      type: String,
      required: true,
   },

   designation: {
      type: String,
      required: true,
   },

   






}, {timestamps: true});



export const Employee = model('Employee', EmployeeSchema);