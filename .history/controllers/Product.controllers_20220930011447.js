exports.getProducts= async (req, res, next) => {
  
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

}

exports.createProduct