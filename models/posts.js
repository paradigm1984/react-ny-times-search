// Require mongoose
const mongoose = require("mongoose");
// Create Schema class
const Schema = mongoose.Schema;

// Create article schema
const PostSchema = new Schema({
  // title is a non required string because i wasnt able to take out the empty objects when scraping
  title: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false
  },
  // link is a non required string because i wasnt able to take out the empty objects when scraping
  summary: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date, 
    default: Date.now
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  comments:[{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

// Create the Post model with the PostSchema
const Post = mongoose.model("Post", PostSchema);

// Export the model
module.exports = Post;
