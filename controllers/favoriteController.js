// Importing the Favorite and Product models
const Favorite = require("../models/Favorite");
const Product = require("../models/Product");

// GET favorites
const getFavorites = async (req, res) => {
  try {
    // Fetch all favorite items and populate the 'product' field with full product details
    const items = await Favorite.find().populate("product");

     // Send the list of favorite items as a JSON response
    res.json(items);
  } catch (err) {
    // Send a 500 Internal Server Error response if something goes wrong
    res.status(500).json({ message: err.message });
  }
};

// POST add to favorites
const addToFavorites = async (req, res) => {
  try {
     // Extract productId from the request body
    const { productId } = req.body;

      // Validate that the productId is provided
    if (!productId) return res.status(400).json({ message: "Product ID required" });


   // Check if the product exists in the database
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

     // Check if the product is already in the favorites list
    const exists = await Favorite.findOne({ product: productId });
    if (exists) return res.status(400).json({ message: "Already in favorites" });

        // If not already a favorite, create a new Favorite item
    const favItem = new Favorite({ product: productId });
    await favItem.save();

        // Respond with a success message and the created favorite item
    res.status(201).json({ message: "Product added to favorites", favItem });
  } catch (err) {
     // Handle unexpected errors with a 500 Internal Server Error response
    res.status(500).json({ message: err.message });
  }
};

// Export the controller functions to be used in routes
module.exports = { getFavorites, addToFavorites };