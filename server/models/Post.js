const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
    required: true,
    unique: true,
    max: 40,
    min: 3,
  },
  datetime: {
    type: Date,
    default: Date.now(),
  },
  body: {
    type: String,
    required: true,
    unique: true,
    max: 4096,
    min: 10,
  },
});

module.exports = mongoose.model("Post", postSchema);
