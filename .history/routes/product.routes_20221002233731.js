const express = require('express');
const router = express.Router()
const productControllers = require('../controllers/Product.controllers')


router.route('/')
.get(productControllers.getProducts)
.post(productControllers.createProducts)

// bulk update product
router.route("/bulk-update").patch(productControllers.bulkUpdatedProduct)

// Update single product
router.route('/:id').patch(productControllers.updateProduct)
    
    router.route(\).delete()




module.exports = router