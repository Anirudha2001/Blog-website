const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

router.post('/', async (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
    });
    await newPost.save();
    res.json(newPost);
});

module.exports = router;
