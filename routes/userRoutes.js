const express = require("express");
const router = express.Router();
const {
  handleRegisterUsers,
  handleLoginUser,
  handleUserProfile,
} = require("../controllers/userControllers"); // user route controller's

// Register User
router.post("/", handleRegisterUsers);

// Login User
router.post("/", handleLoginUser);

// Get User Profile (Protected Route)
router.get("/", handleUserProfile);

module.exports = router;
