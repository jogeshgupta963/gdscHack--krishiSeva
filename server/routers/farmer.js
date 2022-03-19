const express = require('express')

const farmer = require('../models/farmer')
const { postFarmer } = require('../controller/farmer.js')
const farmerRouter = express.Router();

//@route  POST /api/v1/farmer/profile
//desc to create farmer profile
//access private
farmerRouter
    .route('/profile')
    .post(postFarmer)





module.exports = farmerRouter