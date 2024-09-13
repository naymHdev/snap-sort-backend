const express = require("express");
const router = express.Router();
const {
  handleAddImages,
  handleGetImages,
  handleDeleteAllImages,
  handleUpdateImages,
} = require("../controllers/imageControllers");

router.post("/", handleAddImages);
router.get("/", handleGetImages);
router.delete("/:id", handleDeleteAllImages);
router.patch("/update-order", handleUpdateImages);

module.exports = router;
