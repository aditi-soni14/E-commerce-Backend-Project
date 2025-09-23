//Importing the mongoose library to interact with MongoDB
const mongoose = require("mongoose");

//Defining an asynchronous function to connect to MongoDB
const connectDB = async () => {
  try {
//Attempting to connect to the MongoDB database using the URI from environment variables
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true, // Use the new MongoDB URL string parser
      useUnifiedTopology: true, // Use the new server discovery and monitoring engine
    });

//Log success message if connection is successful
    console.log("MongoDB Connected...");
  } catch (error) {
 //Log error message if connection fails
    console.error("MongoDB connection failed:", error.message);
 //Exit the process with failure code (1)
    process.exit(1);
  }
};

//Exporting the connectDB function so it can be used in other files
module.exports = connectDB;




