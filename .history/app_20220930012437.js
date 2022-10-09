const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');


const produc


app.use(express.json());
app.use(cors());



// Route ////////
app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


// Posting Data
app.use('/api/v1/products', );


// Get Data 
app.use('/api/v1/products',);


module.exports = app;
