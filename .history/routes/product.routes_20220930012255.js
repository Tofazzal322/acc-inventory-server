const express = require('express');
const router = express.Router()
const productControllers = require('../controllers/Product.controllers')


router.route('/')
.get(productControllers)
.post()



module.exports = router