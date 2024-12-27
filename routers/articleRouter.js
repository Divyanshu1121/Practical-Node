const express = require('express');
const { getAllArticles, getMyArticles, createArticle } = require('../controllers/articleController');
const { renderArticleForm } = require('../controllers/viewController');
const { authenticateToken } = require('../middlewares/auth');
const router = express.Router();

router.get('/', getAllArticles);
router.get('/my-articles', authenticateToken, getMyArticles);
router.get('/new', authenticateToken, renderArticleForm);
router.post('/', authenticateToken, createArticle);

module.exports = router;
