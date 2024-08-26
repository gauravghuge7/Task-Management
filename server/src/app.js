import express from 'express';


const app = express();



app.get('/Home', (req, res) => {
  res.send('Hello World!');
});

export default app;