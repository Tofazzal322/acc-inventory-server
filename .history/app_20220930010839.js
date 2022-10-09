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
app.post('/api/v1/products', async (req, res, next) => {
  try {
    // const products = new Product(req.body)   
    // const result= await products.save()      
    const result = await Product.create(req.body)
    result.logger()
    res.status(200).json({
      status: 'success',
      message: 'Data Inserted Successful',
      date: result
    })

  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Data is not valid",
      error: error.message
    })
  }
});

app.get('/api/v1/products', async (req, res, next) => {
  
  try {
    const products = await Product.find({ $or: [{ _id: "6335f24320d7960530e60bad" }, { name: 'Mobile6' }] });
    
    res.status(200).json({
      status: "success",
      data: products
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Data is not valid",
      error: error.message
    });
  };

});


module.exports = app;
