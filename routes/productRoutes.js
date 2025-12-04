const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// Fetch all products
router.get("/", productController.getAllProducts);

// Fetch a product by ID
router.get("/:id", productController.getProductById);

// Add a new product
router.post("/", productController.addProduct);

module.exports = router;
