const express = require('express');
const router = express.Router()
const productControllers = require('../controllers/Product.controllers')


router.route('/')
.get(productControllers.getProducts)
.post(productControllers.createProducts)


router.route("/bulk-update").patch()

router.route('/:id').patch(productControllers.updateProduct)




module.exports = router