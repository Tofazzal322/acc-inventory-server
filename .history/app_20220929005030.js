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
    
    
  } 
})

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


module.exports = app;
