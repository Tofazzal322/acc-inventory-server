const express = require("express");
const app = express();
const cors = require("cors");
const  mongoose  = require("mongoose");




app.use(express.json());
app.use(cors());

//Schema design
const productSchema = mongoose.schema({
  name: {
    type: String;
    required : true
  } 
})

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


module.exports = app;
