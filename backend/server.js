const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


const {Connection } = require('./configs/db');
const { router} = require('./routes/code.route');

// Middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).send(`<h1 style="color:blue;text-align:center">Welcome to Code Conversion Generator Backend</h1>`);
});


app.use('/api',router);

// Start server
app.listen(port, async () => {
  try {
    console.log(`Server is running on PORT: ${port}`);
    await Connection;
    console.log(`Connected to Database`);
  } catch (error) {
    console.log(`Error in server: ${error.message}`);
  }
});