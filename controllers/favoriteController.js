const Favorite = require("../models/Favorite");
const Product = require("../models/Product");

// GET favorites
const getFavorites = async (req, res) => {
  try {
    const items = await Favorite.find().populate("product");
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST add to favorites
const addToFavorites = async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) return res.status(400).json({ message: "Product ID required" });

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const exists = await Favorite.findOne({ product: productId });
    if (exists) return res.status(400).json({ message: "Already in favorites" });

    const favItem = new Favorite({ product: productId });
    await favItem.save();
    res.status(201).json({ message: "Product added to favorites", favItem });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getFavorites, addToFavorites };