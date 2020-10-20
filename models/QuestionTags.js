const mongoose = require("mongoose");

const userTagsSchema = mongoose.Schema({
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  },
  tag: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag"
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

module.exports = mongoose.model("QuestionTags", userTagsSchema);
