const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Teacher Schema to be stored in school profile
const teacherSchema = new Schema({
  id: {
    type: Number,
    required: true
  }
});

// Create Profile for Schools
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  taxID: {
    type: String,
    required: true
  },
  rcNumber: {
    type: String,
    required: false
  },
  teachers: [teacherSchema]
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
