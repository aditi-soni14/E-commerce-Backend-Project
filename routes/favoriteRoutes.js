const express = require("express");
// Importing controller functions to handle favorite products requests
const { getFavorites,addToFavorites} = require("../controllers/favoriteController");
const router = express.Router();

/**
 * @swagger
 * /api/favorites:
 *   get:
 *     summary: Get all favorite products
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - _id: "64fe9012abcd5678ef123456"
 *                 product:
 *                   _id: "64fe1234abcd5678ef901234"
 *                   name: "Smartphone"
 */

/**
 * @swagger
 * /api/favorites:
 *   post:
 *     summary: Add product to favorites
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *                 example: "64fe1234abcd5678ef901234"
 *     responses:
 *       201:
 *         content:
 *           application/json:
 *             example:
 *               message: "Product added to favorites"
 *               favItem:
 *                 _id: "64fe9012abcd5678ef123456"
 *                 product:
 *                   _id: "64fe1234abcd5678ef901234"
 *                   name: "Smartphone"
 */

// Define GET route to retrieve all favorite products
router.get("/",getFavorites);

// Define POST route to add a product to favorites
router.post("/",addToFavorites);

// Export the router for use in the main app
module.exports = router;