const Cart = require("../models/Cart");
const Product = require("../models/Product");

// GET cart items
const getCartItems = async (req, res) => {
  try {
    const items = await Cart.find().populate("product");
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST add to cart
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    if (!productId || !quantity) return res.status(400).json({ message: "Product ID & quantity required" });

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cartItem = await Cart.findOne({ product: productId });
    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
      return res.json({ message: "Cart updated", cartItem });
    }

    cartItem = new Cart({ product: productId, quantity });
    await cartItem.save();
    res.status(201).json({ message: "Product added to cart", cartItem });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getCartItems, addToCart };