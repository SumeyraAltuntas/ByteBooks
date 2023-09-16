//import all of the files needed

const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config('/env')
    console.log(process.env) // remove this after you've confirmed it is working

const app = express();

//Connect mongoose when we have mongoose set up
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB.");
  })
  .catch((err) => {
    console.log(err.message);
  });


//define port that will be responding from the backend. if the first port does not work, it will default to 3001

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})