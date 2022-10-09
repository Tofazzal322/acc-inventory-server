const express = require("express");
const app = express();
const cors = require("cors");
const  mongoose  = require("mongoose");




app.use(express.json());
app.use(cors());

//Schema design
const productSchema = mongoose.schema({
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
    enum:["Kg", "Liter"]
  }

})

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


module.exports = app;
