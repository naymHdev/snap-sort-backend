const Image = require("../models/imageModel");

async function handleAddImages(req, res) {
  try {
    const data = req.body;

    // Creating the user in the database
    const result = await Image.create(data);

    console.log("Image added:", result);

    return res.status(201).json({
      status: "Success",
      message: "Image added successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error adding Image:", error);

    res.status(500).json({
      status: "Failed",
      message: "An internal server error occurred.",
    });
  }
}

async function handleGetImages(req, res) {
  try {
    // Fetch all images from the database
    const images = await Image.find();

    return res.status(200).json({
      status: "Success",
      results: images.length,
      data: images,
    });
  } catch (error) {
    console.error("Error fetching images:", error);

    res.status(500).json({
      status: "Failed",
      message: "An internal server error occurred.",
    });
  }
}

module.exports = {
  handleAddImages,
  handleGetImages,
};
