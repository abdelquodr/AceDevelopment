const { body, validationResult } = require('express-validator')

module.exports = class {

    // validate the written article from user
    static validateArticle(req, res, next) {
        return [
            body('topic').exists().isLength({ min: 5 }).withMessage('topic is required and exceed 4 characters'),
            body('article').exists().isLength({ min: 100 }).withMessage('articles is required and exceed 100 characters'),
            (req, res, next) => {
                const error = validationResult(req);
                if (!error.isEmpty()) return res.status(400).json(error)
                next()
            }
        ]
    }

}

