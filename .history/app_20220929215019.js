const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');





app.use(express.json());
app.use(cors());



//Schema design
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this product"],
    trim: true,
    unique : true,
    minLength: [3, " Name length short"],
    maxLength : [100, "Name is too Large"]
    
  },
  description: {
    type: String,
    required : true
  },
  Price: {
    type :Number,
    required: true,
    minLength :[0, " Price nai"]
  },
  unit: {
    type: String,
    required: true,
    enum: {
      value: ["Kg", "Liter", "Pcs"],
      message:"unit value can't be {value}, must be Kg/liter/pce"
    }
  },
  quantity: {
    type: Number,
    min: [0, "Quantity con;t be negative"],
    validate: {
      validator:()=> {
        const isInteger = Number.isInteger(value);
        if (isInteger) {
          true
        }
      }
    }
  }


})


// Route ////////

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


module.exports = app;
