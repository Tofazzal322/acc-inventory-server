const Product = require("../model/Product");
const {
    getProductsService,
    createProductsServices,
    productUpdateServices,
    bulkUpdateProductService,
    deleteProductServices,
    bulkDeleteProductService
} = require("../services/product.services");



// Get Product Controller
exports.getProducts = async (req, res, next) => {
  
  try {
    const products = await getProductsService()
    
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
};

//  Create Product Controller
exports.createProducts = async (req, res, next) => {
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
};


// Update product Controller
exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await productUpdateServices(id, req.body);

    res.status(200).json({
      status: "Success",
      message: " Successfully Updated the data"
    })
    

  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: "Couldn't Find data",
      error: error.message
    })
  }
};

exports.bulkUpdatedProduct = async (req, res, next) => {
  
  try {
    const bulkUpdatedProduct = await bulkUpdateProductService(req.body);
    // console.log(bulkUpdatedProduct);
    res.status(200).json({
      status: "Success",
      message: "Bulk Product Deleted Successfully"
    });

  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Couldn't Find the data",
      error: error.message
    });

  }
};

exports.bulkDeleteProduct = async (req, res, next) => {
  
  try {
    const bulkDeleteProduct = await bulkDeleteProductService(req.body.ids);
    if (!bulkDeleteProduct.deletedCount) {
      res.status(400).json({
        status: "fail",
        er
        
  })
}

   
    res.status(200).json({
      status: "Success",
      message: "Bulk Product Updated Successfully"
    });

  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Couldn't Find the data",
      error: error.message
    });

  }
};



exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteProduct= await deleteProductServices(id)

    res.status(200).json({
      status: "Success",
      Message : " Successfully Updated the data"
    })
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Couldn't Find the data",
      error:error.message
    })
  }

}