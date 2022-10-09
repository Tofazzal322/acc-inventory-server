const express = require('express');
const router = express.Router()
const productControllers = require('../controllers/Product.controllers')


router.route('/')
.get(productControllers.getProducts)
.post(productControllers.createProducts)

// bulk update product
router.route("/bulk-update").patch(productControllers.bulkUpdatedProduct)

// Update single product
router.route('/:id').patch(productControllers.updateProduct).delete(productControllers.deleteProduct)
    
//  Delete Single  Product 
// router.route('/:id').delete(productControllers.deleteProduct)




module.exports = router