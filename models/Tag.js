const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  color: {
      type: String,
      required: false
  },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now()
  },
  deletedAt: {
    type: Date,
    required: false,
    default: null
  }
});

module.exports = mongoose.model("Tag", tagSchema);
