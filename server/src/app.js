import express from 'express';
import allRouter from './router/connect.router.js';

const app = express();





app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use("/api", allRouter);



app.use("/*", (req, res) => {

  return res.status(404).json({
    success: false,
    message: "this path is not available in our servers ",
    
  })

})



export default app;