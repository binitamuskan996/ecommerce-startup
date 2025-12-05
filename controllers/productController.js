const productService = require("../services/productService");
const path = require("path");
const { sendErrorResponse, sendResponse } = require("../utils/response");

const getAllProducts = (req, res) => {
    try {
        return res.sendFile(path.join(__dirname, "..", "view", "product.html"));
    } catch (err) {
        return sendErrorResponse(res, err);
    }
};

const getProductById = (req, res) => {
    try {
        const { id } = req.params;
        const result = productService.getProductByIdService(id);

        if (!result) {
            return sendErrorResponse(res, { message: "Product not found", statusCode: 404 });
        }

        return sendResponse(res, result, 200);
    } catch (err) {
        return sendErrorResponse(res, err);
    }
};

const addProduct = (req, res) => {
    try {
        const data = req.body;

        if (!data.productName) {
            return sendErrorResponse(res, { message: "Product name is required", statusCode: 400 });
        }

        console.log(data);

        return sendResponse(res, { value: data.productName }, 201);
    } catch (err) {
        return sendErrorResponse(res, err);
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
};


// const productService = require("../services/productService");

// const path = require("path");

// const getAllProducts = (req, res) => {
//     res.sendFile(path.join(__dirname, "..", "view", "product.html"));
// };
// // const getAllProducts = (req, res) => {
// //     const result = productService.getAllProductsService();
// //     res.send(result);
// // };

// const getProductById = (req, res) => {
//     const { id } = req.params;
//     const result = productService.getProductByIdService(id);
//     res.send(result);
// };

// const addProduct = (req, res) => {
//     //const result = productService.addProductService();
//    // res.send(result);
//    const data=req.body;
//    console.log(data);
//    res.json({value:data.productName})
// };

// // const getAllProducts = (req, res) => {
// //     res.send("Fetching all products");
// // };

// // const getProductById = (req, res) => {
// //     const { id } = req.params;
// //     res.send(`Fetching product with ID: ${id}`);
// // };

// // const addProduct = (req, res) => {
// //     res.send("Adding a new product");
// // };

// module.exports = {
//     getAllProducts,
//     getProductById,
//     addProduct
// };
