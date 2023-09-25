const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Create a new blog post
router.post('/create', async (req, res) => {
  try {
    const { title, brand, content } = req.body;

    const newBlogPost = new Blog({
      title,
      brand,
      content,
    });

    await newBlogPost.save();

    res.json({ message: 'Blog post created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all blog posts
router.get('/all', async (req, res) => {
  try {
    const blogPosts = await Blog.find();
    res.json(blogPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific blog post by ID
router.get('/:id', async (req, res) => {
  try {
    const blogPost = await Blog.findById(req.params.id);
    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.json(blogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Delete a blog post by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedBlogPost = await Blog.findByIdAndRemove(req.params.id);
    if (!deletedBlogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
