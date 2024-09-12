const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    default: 0,
  },
  isFeatured: {
    type: Boolean,
  },
});

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
