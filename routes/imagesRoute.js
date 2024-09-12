const express = require("express");
const router = express.Router();
const {
  handleAddImages,
  handleGetImages,
} = require("../controllers/imageControllers");

router.post("/", handleAddImages);
router.get("/", handleGetImages);

module.exports = router;
