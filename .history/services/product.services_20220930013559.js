const Product = require('../model/Product');

exports.getProductsService = async () => {
    const products = await Product.find({ $or: [{ _id: "6335f24320d7960530e60bad" }, { name: 'Mobile6' }] })
return 
}