const express = require('express')

const user = require('../models/user')
const { postUser } = require('../controller/user.js')
const userRouter = express.Router();

//@route  POST /api/v1/user/signup
//desc to create user profile
//access public
userRouter
    .route('/signup')
    .post(postUser)

userRouter
    .route('/login')
    .post(postUser)




module.exports = userRouter