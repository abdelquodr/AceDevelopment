const { body } = require('express-validator');
const mongoose = require('mongoose')


// files
const User = require('../../dbase/model/user');
const AuthHelper = require('../../helper');



module.exports = class UseController {

    // register new user and save to the database
    static async registerUser(req, res, next) {
        const { email, password } = req.body;
        try {
            req.body.password = await AuthHelper.hashPassword(password)
            const user = await User.find({ email: email })
            if (!user) return res.status(400).json({ message: 'user already exist' })
            const newUser = new User({ ...req.body, _id: mongoose.Types.ObjectId() })
            newUser.save()
                .then((user) => {
                    res.status(200).json({
                        message: "user registered",
                        user: user,
                        request: {
                            Method: "POST",
                            url: `http://localhost:5000/api/v1/${user._id} `
                        }
                    })
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'registration failed'
            })
        }

    }


    // login user after verification from the database
    static async loginUser(req, res, next) {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) return res.status(400).json({ message: 'Invalid email or password' });
            const userObject = user.toJSON();
            const verified = AuthHelper.verifyPassword(password, user.password);
            if (!verified) return res.status(400).json({ message: 'Invalid email or password' });
            userObject.token = await AuthHelper.signInToken({ user })
            res.status(201).json(userObject)
        } catch (error) {
            res.status(400).json({ message: 'signIn error' })
        }
    }


    // user should be able to view his/her details
    static async singleUser(req, res, next) {
        const id = req.user.user._id;
        try {
            const user = await User.findById(id);
            if (user) return res.status(200).json(user)
        } catch (error) {
            res.status(400).json({ messge: 'Unauthorized resources' })
        }
    }


    // user can update his/her profile by adding user-image and more
    static async updateUserRegistration(req, res, next) {
        const { user: { user } } = req;
        console.log(user)
        try {
            const user = User.findByIdAndUpdate({})
        } catch (err) {

        }
    }

    // user should be able to see other users on the platform
    static async fetchAllUser(req, res, next) {
        console.log(req)
        try {
            // const users = await User.find();
            // if (!users) return res.status(400).json({ massage: 'Not allowed' })
            // res.send(200).json(users)
        } catch (error) {
            res.status(400).json({ messge: 'Unauthorized resources' })
        }
    }


    // user should be able to delete his/her account
    static async deleteUser(req, res, next) {
        const id = req.user.user._id;
        console.log(id)
        try {
            const user = await User.findByIdAndDelete({ _id: id })
            if (!user) return res.status(400).json({ message: 'User Not Found' })
            res.status(200).json({ ...user, request: 'DELETE', message: 'User deleted from database' })
        } catch (error) {
            res.status(400).json({ error: error, message: 'Authorized user' })
        }
    }
}