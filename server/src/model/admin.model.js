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




adminSchema.methods = {

   generateAdminAccessToken: function() {

      return jwt.sign(
         {
            _id: this._id,
            adminEmail: this.adminEmail,
         },
         process.env.EMPLOYEE_ACCESS_SECRET_KEY,      //   need to be changed the every time

         {
            expiresIn: '24h'
         }
      
      )

   },

   generateEmployeeRefreshToken: function() {

      return jwt.sign(
         
         {
                  _id: this._id,
         },
         process.env.EMPLOYEE_REFRESH_SECRET_KEY,     //   need to be changed the every time
      
         {
            expiresIn: '7d'
         }
      )
   },





}

Empl.pre('save', async function() {

   if(this.isModified('adminPassword')) {

      this.adminPassword = await bcrypt.hash(this.adminPassword, 10)
   }
})


















export const Admin = model('Admin', AdminSchema);