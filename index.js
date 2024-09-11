const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON requests
const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB Connection URI
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB using Mongoose
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully ✅");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Sample route
app.get("/", (req, res) => {
  res.send("Hello Snap Sort server!");
});

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚴🏻‍♂️`);
});
