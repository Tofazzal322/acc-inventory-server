const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");


const app = require("./app");

// database connection
mongoose.connect({process.env.}).then(() => {
  console.log(`Database Connection successfully`.red.bold);
})

// mongoose.connect('localhost/users_test');

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.red.bold);
});

