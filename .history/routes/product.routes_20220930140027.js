const express = require('express');
const router = express.Router()
const productControllers = require('../controllers/Product.controllers')


router.route('/')
.get(productControllers.getProducts)
.post(productControllers.createProducts)



router.route('/:id').
module.exports = router