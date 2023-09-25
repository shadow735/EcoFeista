const mongoose = require('mongoose');

// Define the Blog schema
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  brand: { // Add the "brand" field
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

// Create a Blog model using the schema
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
