// npm 
const express = require('express')

// files
const UserMiddleware = require('../middleware/userMiddleware')
const ArticleMiddleare = require('../middleware/articleMiddleware')
const ArticleController = require('../controller/articleControlller')

const articleRouter = express.Router()

articleRouter.post('/create-article', UserMiddleware.verifyToken, ...ArticleMiddleare.validateArticle(), ArticleController.createArticle)
articleRouter.patch('/:articleId', UserMiddleware.verifyToken, ...ArticleMiddleare.validateArticle(), ArticleController.updateArticle)
articleRouter.get('/all-articles', UserMiddleware.verifyToken, ArticleController.getAllArticle)
articleRouter.delete('/:articleId', UserMiddleware.verifyToken, ArticleController.deleteArticle)

module.exports = articleRouter