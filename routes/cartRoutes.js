const express = require("express");
const { getCartItems, addToCart } = require("../controllers/cartController");
const router = express.Router();

/**
 * @swagger
 * /api/cart:
 *   get:
 *     summary: Get all cart items
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - _id: "64fe5678abcd1234ef901234"
 *                 product:
 *                   _id: "64fe1234abcd5678ef901234"
 *                   name: "Smartphone"
 *                 quantity: 2
 */

/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Add product to cart
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
 *               quantity:
 *                 type: number
 *                 example: 2
 *     responses:
 *       201:
 *         content:
 *           application/json:
 *             example:
 *               message: "Product added to cart"
 *               cartItem:
 *                 _id: "64fe5678abcd1234ef901234"
 *                 product:
 *                   _id: "64fe1234abcd5678ef901234"
 *                   name: "Smartphone"
 *                 quantity: 2
 */

router.get("/", getCartItems);
router.post("/", addToCart);
module.exports = router;