const { body, validationResult } = require('express-validator');
const multer = require('multer')

const AuthHelper = require('../../helper');


module.exports = class UserMiddleware {

    // check and validate incoming user input
    static validateUser() {
        return [
            body('firstname').exists().withMessage('firstname is required'),
            body('lastname').exists().withMessage('lastname is required'),
            body('username').exists().withMessage('username is required'),
            body('email').exists().matches(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/).withMessage('invalid email type'),
            body('phone').matches(/^\d{11}$/).withMessage('Invalid or empty phone number'),
            body('password').exists().isLength({ min: 6 }).withMessage('password should be 6 at least characters'),
            body('online').not().exists().withMessage('you can not set active on registeration'),
            (req, res, next) => {
                const error = validationResult(req);
                if (!error.isEmpty()) res.status(400).json(error);
                next();
            }
        ]
    };


    // check if the user-login input is in correct format
    static validatelogin() {
        return [
            body('email').exists().withMessage('registation mail is required'),
            body('password').exists().withMessage('password must be at least 6 characters'),
            (req, res, next) => {
                console.log(req.file)
                const error = validationResult(req);
                if (!error.isEmpty()) res.status('400').json(error);
                next();
            }
        ]
    }


    // verify user token passed from the login middleware
    static async verifyToken(req, res, next) {
        const { authorization: BearerToken } = req.headers;
        if (!BearerToken) return res.status(400).json({ message: 'Empty user Validation certificate' })
        const [, token] = BearerToken.split(' ');
        try {
            req.user = await AuthHelper.verifyToken(token);
            next()
        } catch (error) {
            res.status(400).json({ message: 'Invalid user validation certificate' })
        }
    }



}



