// Importing mongoose to define schema and interact with MongoDB
const mongoose = require("mongoose");

// Defining the schema for a Favorite item
const favoriteSchema = new mongoose.Schema({
  // Reference to the Product model using ObjectId
  product: { type: mongoose.Schema.Types.ObjectId,  // Refers to a product in the Product collection
     ref: "Product",   // Specifies the related model name
      required: true },  // A product must be associated with each favorite entry
});

// Exporting the Favorite model for use in other parts of the app
module.exports = mongoose.model("Favorite", favoriteSchema);