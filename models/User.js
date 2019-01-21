const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Main User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);