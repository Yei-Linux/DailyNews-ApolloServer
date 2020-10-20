const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  photo: {
    type: String,
    required: false
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  userName: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  providerId: {
    type: String
  },
  resetPasswordToken: {
    type: String
  },
  resetTokenExpiry: {
    type: Number
  },
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Person",
    required : false
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

module.exports = mongoose.model("User", userSchema);
