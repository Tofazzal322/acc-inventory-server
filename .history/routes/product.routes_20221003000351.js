const express = require('express');
const router = express.Router()
const productControllers = require('../controllers/Product.controllers')

// bulk update product
router.route("/bulk-update")
    .patch(productControllers.bulkUpdatedProduct)
    router.route('').delete(productControllers.bulkDeleteProduct)


router.route('/')
.get(productControllers.getProducts)
.post(productControllers.createProducts)



// Update single product and Delete Single  Product 
router.route('/:id')
    .patch(productControllers.updateProduct)
    .delete(productControllers.deleteProduct)
    

// router.route('/:id').delete(productControllers.deleteProduct)




module.exports = router