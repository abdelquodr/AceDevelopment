// npm modules
const express = require('express');
const multer = require('multer')

// files
const UserMiddleware = require('../middleware/userMiddleware')
const UserController = require('../controller/userController');
const UseController = require('../controller/userController');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },

    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    },

    fileFilter: (req, file, cb) => {
        const contentType = req.get('content-type');
        if (contentType.includes('multipart/form-data')) {
            if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/gif') {
                cb(null, true)
            } else {
                cb(null, false)
            }
            console.log('finally finally reach ooo')
        }
    }
})

const upload = multer({ storage: storage })

// var upload = multer({ dest: 'uploads/' })




const userRouter = express.Router()

userRouter.post('/register', ...UserMiddleware.validateUser(), UserController.registerUser)
userRouter.post('/login', upload.single('userImage'), ...UserMiddleware.validatelogin(), UserController.loginUser)
userRouter.get('/:userId', UserMiddleware.verifyToken, UserController.singleUser)
userRouter.patch('/register', UserMiddleware.verifyToken, upload.single('userImage'), (req) => { console.log(req.file) })
userRouter.get('/users', UserMiddleware.verifyToken)  // not done ith this
userRouter.delete('/:userId', UserMiddleware.verifyToken, UseController.deleteUser)

module.exports = userRouter;