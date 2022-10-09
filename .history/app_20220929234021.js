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
    unique: true,
    minLength: [3, " Name length short"],
    maxLength: [100, "Name is too Large"]
    
  },

  description: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true,
    minLength: [0, " Price nai"]
  },

  unit: {
    type: String,
    required: true,
    enum: {
      values: ["Kg", "Liter", "Pcs"],
      message: "unit value can't be {value}, must be Kg/liter/pce"
    }
  },

  quantity: {
    type: Number,
    min: [0, "Quantity con;t be negative"],
    validate: {
      validator: (value) => {
        const isInteger = Number.isInteger(value);
        if (isInteger) {
          return true
        } else {
          return false
        }
      }
    },
    message: "Quantity must be integer"
  },

  status: {
    type: String,
    required: true,
    enum: {
      values: ["In-Stock", "Out-Off-Stock", "Discontinue"],
      message: "Status can;t be {VALUE}"
    }
  },

  //   createdAt: {
  //     type: Date,
  //     default: Date.now,
  //   },

  //   updatedAt: {
  //     type: Date,
  //     default: Date.now,
  //  },
  // supplier: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Supplier",
    
  // },
  // categories: [{
  //   name: {
  //     type: String,
  //     required: true,

  //   },
  //   _id: mongoose.Schema.Types.ObjectId,
  // }]

}, {
  timestamps: true,
 
});

//Schema -> Model --> Query 

/// Model ///

const Product = mongoose.model('Products', productSchema);




// Route ////////

app.get("/", (req, res) => {


  res.send("Route is working! YaY!");
});

// Posting Data
app.post('/api/v1/products', async (req, res, next) => {
  try {
      // const products = new Product(req.body)
// const result= await products.save()
    
    const result = await Product.
  res.status(200).json({
    status: 'success',
    message: 'Data Inserted Successful',
      date: result
  })

  } catch (error) {
    
    res.status(400).json({
      status: "Fail",
      message: "Data is not valid",
      error:error.message
    })
    
  }


})


module.exports = app;
