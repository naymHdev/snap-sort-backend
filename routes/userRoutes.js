const express = require("express");
const router = express.Router();
const {
  handleRegisterUsers,
  handleLoginUser,
  handleUserProfile,
} = require("../controllers/userControllers"); // user route controller's

// Register User
router.post("/api/register", handleRegisterUsers);

// Login User
router.post("/api/login", handleLoginUser);

// Get User Profile (Protected Route)
router.get("/api/profile", handleUserProfile);

module.exports = router;
