const express = require("express");
const app = express();
const cors = require("cors");




app.use(express.json());
app.use(cors());

//SCH

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


module.exports = app;
