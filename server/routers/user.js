const express = require('express')

// const user = require('../models/user')
const { signupUser, login,logout } = require('../controller/user.js');
const { jwtVerify } = require('../middleware/authHelper.js');
const userRouter = express.Router();

//@route  POST /api/v1/user/signup
//desc to create user profile
//access public
userRouter
    .route('/signup')
    .post(signupUser)

    
//@route  POST /api/v1/user/login
//desc to login
//access public
userRouter
    .route('/login')
    .post(login)

userRouter
.route('/logout')
.post(jwtVerify,logout)


module.exports = userRouter