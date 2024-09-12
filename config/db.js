const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB Connection URI
const MONGO_URI = process.env.MONGO_URI;

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully ✅");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
};

module.exports = connectDB;
