const express = require("express");
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

router.get("/",getFavorites);
router.post("/",addToFavorites);
module.exports = router;