const User = require("../models/userModel");

// User register controller
async function handleRegisterUsers(req, res) {
  try {
    const data = req.body;

    // Creating the user in the database
    const result = await User.create(data);

    console.log("User created:", result);

    return res.status(201).json({
      status: "Success",
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    res.status(500).json({
      status: "Failed",
      message: "An internal server error occurred.",
    });
  }
}

// Login Function
async function handleLoginUser(req, res) {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

// User Profile controller

async function handleUserProfile(req, res) {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

module.exports = {
  handleRegisterUsers,
  handleLoginUser,
  handleUserProfile,
};
