
import app from './src/app.js';
import connectDB from "./src/db/database.js"
import dotenv from 'dotenv';

dotenv.configDotenv({
   path: "./.env"
})


const PORT = 4000;



connectDB() 

.then(() => {

   app.listen(PORT, () => {
      console.log(`         Server is running on port ${PORT} 
      \n                the Server is http://localhost:${PORT}      `);
   })

})

.catch((error) => {
   console.log("Error while connecting express app to database", error);
});



