const express = require('express')

// const user = require('../models/user')
const { signupUser, login } = require('../controller/user.js')
const userRouter = express.Router();

//@route  POST /api/v1/user/signup
//desc to create user profile
//access public
userRouter
    .route('/signup')
    // .get(getSignup)
    .post(signupUser)

    
//@route  POST /api/v1/user/login
//desc to login
//access public
userRouter
    .route('/login')
    // .get(getLogin)
    .post(login)




module.exports = userRouter