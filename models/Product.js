// Importing mongoose to define the schema and interact with MongoDB
const mongoose = require("mongoose");

// Defining the schema for a Product
const productSchema = new mongoose.Schema({
    // Name of the product
  name: { 
    type: String,     // Product name must be a string
     required: true      // Name is required
     },


      // Category the product belongs to (e.g., electronics, books, etc.)
  category: {
     type: String,  // Category must be a string
     required: true   // Category is required
     },



      // Price of the product
  price: {
     type: Number,  // Price must be a number
      required: true  // Price is required
     },

// Optional description of the product
  description: { type: String },   // Description must be a string (optional)

  // Optional image URL for the product
  image: { type: String },  // Image URL as a string (optional)
});


// Exporting the Product model for use in the application
module.exports = mongoose.model("Product", productSchema);