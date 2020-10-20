const mongoose = require("mongoose");
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2');

const commentSchema = mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  },
  comments: {
    type: String
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

commentSchema.virtual("children", {
  ref: "Comment",
  localField: "_id",
  foreignField: "parent"
});

commentSchema.plugin(mongooseAggregatePaginate);

module.exports = mongoose.model("Comment", commentSchema);
