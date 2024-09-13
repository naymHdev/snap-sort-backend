const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");
const userRouter = require("./routes/userRoutes");
const imageRouter = require("./routes/imagesRoute");

// Middleware for parsing JSON requests
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://snapsort-front.vercel.app",
    "https://snapsort-front.vercel.app",
    "https://snap-sort-backend.vercel.app",
    "https://snap-sort.netlify.app",
  ],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB Connection
connectDB();

// Sample route
app.get("/", (req, res) => {
  res.send("Hello Snap Sort server!");
});

// User routers
app.use("/api/user", userRouter);

// image router
app.use("/api/images", imageRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚴🏻‍♂️`);
});
