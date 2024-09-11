const User = require("../models/userModel");

// User register controller
async function handleRegisterUsers(req, res) {
  try {
    const data = req.body;
    const result = await User.create(data);
    return res.status(200).json({
      status: "Success",
      message: "User created successful",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Something went wrong!!",
      error: error,
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

    // Create JWT Token
    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
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
