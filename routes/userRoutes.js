const express = require("express");
const router = express.Router();
const {
  handleRegisterUsers,
  handleLoginUser,
  handleUserProfile,
} = require("../controllers/userControllers"); // user route controller's


// Register User
router.post("/api/user/register", handleRegisterUsers);

// Login User
router.post("/api/user/register/login", handleLoginUser);

// Get User Profile (Protected Route)
router.get("/api/user", handleUserProfile);

// router
//   .route("/")
//   .post(handleRegisterUsers)
//   .post(handleLoginUser)
//   .get(handleUserProfile);

module.exports = router;
