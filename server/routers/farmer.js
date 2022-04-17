const express = require('express')

const {createFarmerProfile,getAllFarmerProfile,getFarmerProfileById,updateFarmerProfile} = require('../controller/farmer')
const {jwtVerify} = require('../middleware/authHelper')

const farmerRouter = express.Router();

//@Route   /api/v1/profile
//@desc    Post create profile
//@access  Private

farmerRouter
.route('/')
.post(jwtVerify,createFarmerProfile)
.get(getAllFarmerProfile)

farmerRouter
.route('/:_id')
.get(getFarmerProfileById)
.put(jwtVerify,updateFarmerProfile)

module.exports = farmerRouter
