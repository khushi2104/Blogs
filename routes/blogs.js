const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog'); // Import the Blog model


router.post('/', async (req, res) => {
  try {
    const { title, content, author } = req.body;

   
    const newBlog = new Blog({
      title,
      content,
      author,
    
    });

   
    const savedBlog = await newBlog.save();

    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find(); // Fetch all blogs from the database
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving blogs' });
  }
});
module.exports = router;
