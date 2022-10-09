const {
    getProductsService,
    createProductsServices
} = require("../services/product.services");


exports.getProducts = async (req, res, next) => {
  
  try {
    const products = await getProductsSe     rvice()
    
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

exports.createProducts=async (req, res, next) => {
  try { 
    const result = await createProductsServices(req.body)
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
}