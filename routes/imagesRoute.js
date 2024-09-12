const express = require("express");
const router = express.Router();
const {
  handleAddImages,
  handleGetImages,
  handleDeleteAllImages,
} = require("../controllers/imageControllers");

router.post("/", handleAddImages);
router.get("/", handleGetImages);
router.delete("/:id", handleDeleteAllImages);

module.exports = router;
