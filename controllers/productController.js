const productService = require("../services/productService");

const getAllProducts = (req, res) => {
    const result = productService.getAllProductsService();
    res.send(result);
};

const getProductById = (req, res) => {
    const { id } = req.params;
    const result = productService.getProductByIdService(id);
    res.send(result);
};

const addProduct = (req, res) => {
    const result = productService.addProductService();
    res.send(result);
};

// const getAllProducts = (req, res) => {
//     res.send("Fetching all products");
// };

// const getProductById = (req, res) => {
//     const { id } = req.params;
//     res.send(`Fetching product with ID: ${id}`);
// };

// const addProduct = (req, res) => {
//     res.send("Adding a new product");
// };

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
};
