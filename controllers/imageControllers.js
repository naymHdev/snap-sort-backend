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

async function handleDeleteAllImages(req, res) {
  const imageId = req.params.id;
  // console.log("imageId", imageId);
  try {
    await Image.deleteMany({ _id: { $in: imageId } });

    return res.status(200).json({
      status: "Success",
      message: "Selected images deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting selected images:", error);
    res.status(500).json({
      status: "Failed",
      message: "An internal server error occurred.",
    });
  }
}

async function handleUpdateImages(req, res) {
  const { orderedImages } = req.body;

  try {
    // Loop through the orderedImages array and update each image
    await Promise.all(
      orderedImages.map(async (image) => {
        const { _id, order, isFeatured } = image;

        // Find image by ID and update its order and isFeatured fields
        await Image.findByIdAndUpdate(_id, { order, isFeatured });
      })
    );

    res.status(200).json({ message: "Image order updated successfully" });
  } catch (error) {
    console.error("Error updating image order:", error);
    res.status(500).json({ message: "Failed to update image order" });
  }
}

module.exports = {
  handleAddImages,
  handleGetImages,
  handleDeleteAllImages,
  handleUpdateImages,
};
