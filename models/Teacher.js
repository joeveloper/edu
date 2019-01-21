const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create teacher profile
const Teacher = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  accountInfo: {
    name: {
      type: String,
      required: true
    },
    accountNumber: {
      type: Number,
      required: true
    },
    bvn: {
      type: Number,
      required: true
    }
  }
});
