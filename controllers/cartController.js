
// Importing the Cart and Product models from the models directoryconst Cart = require("../models/Cart");
const Product = require("../models/Product");

// GET cart items
const getCartItems = async (req, res) => {
  try {
     // Fetch all cart items and populate the 'product' field with full product details
    const items = await Cart.find().populate("product");

    // Send the retrieved cart items as a JSON response
    res.json(items);
  } catch (err) {
     // Send a 500 Internal Server Error response if something goes wrong
    res.status(500).json({ message: err.message });
  }
};

// POST add to cart
const addToCart = async (req, res) => {
  try {
     // Destructure productId and quantity from the request body
    const { productId, quantity } = req.body;

     // Validate that both productId and quantity are provided
    if (!productId || !quantity) return res.status(400).json({ message: "Product ID & quantity required" });

     // Check if the product with the given ID exists in the database
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

     // Check if the product is already in the cart
    let cartItem = await Cart.findOne({ product: productId });

    if (cartItem) {
       // If it exists, increase the quantity
      cartItem.quantity += quantity;
      await cartItem.save();
      return res.json({ message: "Cart updated", cartItem });
    }

     // If product not in cart, create a new cart item
    cartItem = new Cart({ product: productId, quantity });
    await cartItem.save();
    // Respond with success and the created cart item
    res.status(201).json({ message: "Product added to cart", cartItem });
  } catch (err) {
    // Handle any unexpected server errors
    res.status(500).json({ message: err.message });
  }
};

// Export the functions so they can be used in route handlers
module.exports = { getCartItems, addToCart };








