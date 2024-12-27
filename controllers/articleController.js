const Article = require('../models/articleSchema');
const User = require('../models/userSchema');

exports.getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find().populate('author', 'username');
        res.render('./pages/articleList', { articles });
    } catch (err) {
        res.status(500).send('Error fetching articles: ' + err.message);
    }
};

exports.getMyArticles = async (req, res) => {
    try {
        const articles = await Article.find({ author: req.user.id });
        res.render('myArticles', { articles });
    } catch (err) {
        res.status(500).send('Error fetching user articles: ' + err.message);
    }
};

exports.createArticle = async (req, res) => {
    try {
        const { title, content } = req.body;
        const article = new Article({ title, content, author: req.user.id });
        await article.save();

        await User.findByIdAndUpdate(req.user.id, { $push: { articles: article._id } });

        res.redirect('/articles/my-articles');
    } catch (err) {
        res.status(500).send('Error creating article: ' + err.message);
    }
};
