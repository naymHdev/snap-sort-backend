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
  isFeatured: {
    type: Boolean,
  },
  order: {
    type: Number,
  },
});

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
