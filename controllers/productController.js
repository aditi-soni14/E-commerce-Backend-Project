// Importing the Product model
const Product = require("../models/Product");

// GET all products
const getProducts = async (req, res) => {
  try {
     // Fetch all products from the database
    const products = await Product.find();

    
    // Log the number of products found
    console.log("GET /api/products → Found:", products.length, "products");

    
    // Send the products as a JSON response
    res.json(products);
  } catch (err) {
      // Log and send error if something goes wrong
    console.error("Error in getProducts:", err.message);
    res.status(500).json({ message: err.message });
  }
};

// GET products by category
const getProductsByCategory = async (req, res) => {
  try {
    // Extract category from route parameters
    const category = req.params.category;

     // Find all products that match the given category
    const products = await Product.find({ category });

     // Log the number of products found in the category
    console.log(`GET /api/products/${category} → Found:`, products.length, "products");

    // Send the filtered products as a JSON response
    res.json(products);
  } catch (err) {
     // Log and send error if something goes wrong
    console.error("Error in getProductsByCategory:", err.message);
    res.status(500).json({ message: err.message });
  }
};

// POST dummy products (seed)
const addDummyProducts = async (req, res) => {
  try {
     // Define an array of dummy products for seeding
    const dummyProducts = [
      { name: "Smartphone", category: "electronics", price: 20000, description: "Latest Android smartphone", image: "https://via.placeholder.com/150" },
      { name: "Laptop", category: "electronics", price: 55000, description: "Powerful laptop", image: "https://via.placeholder.com/150" },
      { name: "T-Shirt", category: "clothing", price: 600, description: "Cotton t-shirt", image: "https://via.placeholder.com/150" },
      { name: "Jeans", category: "clothing", price: 1800, description: "Blue jeans", image: "https://via.placeholder.com/150" },
      { name: "Backpack", category: "accessories", price: 1200, description: "Durable backpack", image: "https://via.placeholder.com/150" },
      { name: "Wrist Watch", category: "accessories", price: 2500, description: "Analog watch", image: "https://via.placeholder.com/150" },
      { name: "Wooden Chair", category: "furniture", price: 2500, description: "Wooden chair", image: "https://via.placeholder.com/150" },
      { name: "Study Table", category: "furniture", price: 4500, description: "Study table", image: "https://via.placeholder.com/150" },
      { name: "JavaScript Essentials", category: "books", price: 500, description: "Learn JS", image: "https://via.placeholder.com/150" },
      { name: "Harry Potter", category: "books", price: 800, description: "Fantasy novel", image: "https://via.placeholder.com/150" },
    ];

    console.log("Seeding dummy products...");

    // Clear old products
    const deleted = await Product.deleteMany({});
    console.log(" Deleted old products:", deleted.deletedCount);

    // Insert new products
    const inserted = await Product.insertMany(dummyProducts);
    console.log("Inserted dummy products:", inserted.length);

    res.status(201).json({ message: "Dummy products added", count: inserted.length });
  } catch (err) {
    console.error("Error in addDummyProducts:", err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getProducts, getProductsByCategory, addDummyProducts };