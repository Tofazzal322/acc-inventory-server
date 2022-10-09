const Product = require('../model/Product');

exports.getProductsService = async () => {
    const products = await Product.find({ $or: [{ _id: "6335f24320d7960530e60bad" }, { name: 'Mobile6' }] })
return products
}

exports.createProductsServices =async (data)=>{
    const product = await Product.create(data)
    return product
}


exports.productUpdateServices = async (productId,data) => {
    const updateProduct = await Product.updateOne({ _id: productId}, { $set: data },)
    return updateProduct
}
