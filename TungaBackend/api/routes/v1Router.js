//  npm modules
const express = require('express');

// files
const userRouter = require('./user')
const articleRouter = require('./article')


const v1Router = express()


v1Router.use('/user', userRouter)
v1Router.use('/article', articleRouter)


module.exports = v1Router