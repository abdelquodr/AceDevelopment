const mongoose = require('mongoose');
// npm

// files
const Article = require('../../dbase/model/article')

module.exports = class ArticleController {

    // write article and post it to the database
    static async createArticle(req, res, next) {
        console.log(req.user.user._id)
        try {
            const article = new Article({ ...req.body, _id: mongoose.Types.ObjectId(), author: req.user.user._id });
            if (!article) return res.status(400).json({ message: 'fill input box before submission' })
            console.log(article)
            const newArticle = await article.save();
            res.status(200).json(newArticle)
        } catch (error) {
            res.status(400).json({ message: 'unathourized resources' })
        }
    }


    // update the created article from the user that create it
    static async updateArticle(req, res, next) {
        const { params: { articleId }, user: { user: { _id } } } = req;
        try {
            const article = await Article.findOneAndUpdate({ _id: articleId, author: _id }).populate('author', 'username firstname lastname')
            console.log(article)
            if (!article) return res.status(400).json({ message: 'fill input box before submission' })
            const articleObject = article.toJSON();
            res.status(200).json(articleObject)
        } catch (error) {
            res.status(400).json({ message: 'unathourized resources' })
        }
    }


    // get all articles
    static async getAllArticle(req, res, next) {
        try {
            const articles = await Article.find().populate('author', 'username firstname lastname');
            console.log(articles)
            if (!articles) return res.status(400).json({ message: 'unauthorized resorces' })
            res.status(200).json(articles)
        } catch (error) {
            res.status(400).json({ message: 'unathourized resources' })
        }
    }


    // user should be able to delete his/her article
    static async deleteArticle(req, res, next) {
        const { params: { articleId }, user: { user: { _id } } } = req;
        try {
            const article = await Article.findOne({ _id: articleId, author: _id });
            console.log(article)
            if (!article) return res.status(400).json({ message: 'NOT FOUND' })
            await Article.deleteOne({ articleId });
            res.status(200).json({ request: 'DELETE', message: 'Article deleted' })
        } catch (error) {
            res.status(400).json({ message: 'unathourized resources' })
        }
    }
}