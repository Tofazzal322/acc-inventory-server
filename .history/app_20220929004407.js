const express = require("express");
const app = express();
const cors = require("cors");
const { Mongoose } = require("mongoose");




app.use(express.json());
app.use(cors());

//Schema design
Mongoose.

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


module.exports = app;
