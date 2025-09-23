// Importing mongoose to define the schema and interact with MongoDB
const mongoose = require("mongoose");

// Defining the schema for a Cart item
const cartSchema = new mongoose.Schema({
   // Reference to the Product model using ObjectId
  product: { type: mongoose.Schema.Types.ObjectId,  // Foreign key reference
     ref: "Product", // Referencing the "Product" model
      required: true }, // Product is required in each cart item


      // Quantity of the product in the cart
  quantity: { type: Number,  // Should be a number
    default: 1 },            // Defaults to 1 if not provided
});


// Exporting the Cart model to be used in other parts of the application
module.exports = mongoose.model("Cart", cartSchema);