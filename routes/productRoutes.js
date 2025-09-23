const express = require("express");
// Import controller functions to handle product-related requests
const {getProducts, getProductsByCategory, addDummyProducts} = require("../controllers/productController")
const router = express.Router();

/**
 * @swagger
 * /api/products/seed:
 *   post:
 *     summary: Add dummy products
 *     responses:
 *       201:
 *         description: Dummy products inserted
 *         content:
 *           application/json:
 *             example:
 *               message: "Dummy products added"
 *               count: 10
 */


// Route to add dummy products to the database
router.post("/seed" , addDummyProducts);

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - _id: "64fe1234abcd5678ef901234"
 *                 name: "Smartphone"
 *                 category: "electronics"
 *                 price: 20000
 *                 description: "Latest Android smartphone"
 *                 image: "https://via.placeholder.com/150"
 */

// Route to get the list of all products
router.get("/", getProducts);

/**
 * @swagger
 * /api/products/{category}:
 *   get:
 *     summary: Get products by category
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *           example: "electronics"
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - _id: "64fe1234abcd5678ef901234"
 *                 name: "Smartphone"
 *                 category: "electronics"
 *                 price: 20000
 */

router.get("/:category" , getProductsByCategory);

// Export the router object so it can be used in other parts of the application
module.exports = router;