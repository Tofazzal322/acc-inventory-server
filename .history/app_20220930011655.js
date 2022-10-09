const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');





app.use(express.json());
app.use(cors());



// Route ////////

app.get("/", (req, res) => {


  res.send("Route is working! YaY!");
});

// Posting Data
app.post('/api/v1/products', );

// Get Data 
app.get('/api/v1/products',);


module.exports = app;
