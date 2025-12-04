const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// Fetch all products
router.get("/", productController.getProducts);

// Fetch a product by ID
router.get("/:id", productController.getProductsByID);

// Add a new product
router.post("/", productController.postProducts);

// Put request
router.put("/:id", productController.editProducts);

// Delete request
router.delete("/:id", productController.deleteProducts);

// router.get("/", (req, res) => {
//   res.send("Fetching all products");
// });

// router.post("/", (req, res) => {
//   res.send("Adding a new product");
// });

// router.get("/:id", (req, res) => {
//   const id = req.params.id;
//   res.send(`Fetching product with ID: ${id}`);
// });

module.exports = router;
