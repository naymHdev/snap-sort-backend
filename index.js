const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // To use environment variables

const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// MongoDB Connection URI
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB using Mongoose
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Sample route
app.get('/', (req, res) => {
  res.send('Hello Snap Sort server!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚴🏻‍♂️`);
});
