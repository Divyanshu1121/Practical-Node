const express = require('express');
const { authenticateToken } = require('../middlewares/auth.js');
const Comment = require('../models/commentSchema.js');
const Article = require('../models/articleSchema.js');
const router = express.Router();

router.post('/', authenticateToken, async (req, res) => {
    const { content, articleId } = req.body;
    try {
        const article = await Article.findById(articleId);
        if (!article) return res.status(404).send('Article not found');
        const comment = new Comment({ content, article: articleId, author: req.user.id });
        await comment.save();
        res.status(201).send('Comment added');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
