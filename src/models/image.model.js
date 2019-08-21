const mongosee = require("mongoose");
const { Schema } = mongosee;
const path = require("path");

const imageSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  filename: {
    type: String
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

imageSchema.virtual("uniqueId").get(function() {
  return this.filename.replace(path.extname(this.filename));
});

module.exports = mongosee.model("Image", imageSchema);
