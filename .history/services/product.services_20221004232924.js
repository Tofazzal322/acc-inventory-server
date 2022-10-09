const Product = require('../model/Product');


exports.getProductsService = async (query) => {
    const products = await Product.find({}).sort('quantity price name')
    return products
};


exports.createProductsServices = async (data) => {
    const product = await Product.create(data)
    return product
};


exports.productUpdateServices = async (productId, data) => {
    // const updateProduct = await Product.updateOne({ _id: productId }, { $set: data }, {
    //     runValidators: true
    // })
    const product = await Product.findById(productId);
    const updateProduct = await product.set(data).save();
    return updateProduct
};


exports.bulkUpdateProductService = async (data) => {
    // const bulkUpdateProduct = await Product.updateMany({ _id: data.ids }, data, {
    //      runValidators: true
    // })

    const products = [];
    data.ids.forEach(product => {
        products.push(Product.updateOne({ _id: product.id }, product.data))
    });

    const bulkUpdateProduct = await Promise.all(products);
    return bulkUpdateProduct;
};


exports.bulkDeleteProductService = async (ids) => {
    const bulkDeleteProduct = await Product.deleteMany({ })

    return bulkDeleteProduct;
};



exports.deleteProductServices = async (id) => {
    const result = await Product.deleteOne({ _id: id });
    return result;
};
