const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 8080;

// Connect to MongoDB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});