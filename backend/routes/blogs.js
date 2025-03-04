const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

// Create a new blog
router.post('/', async (req, res) => {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
});

// Get all blogs
router.get('/', async (req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
});

module.exports = router;