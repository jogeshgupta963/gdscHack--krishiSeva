const express = require('express');


const {jwtVerify,isExpert,isMiddleman} = require('../middleware/authHelper')
const {createMiddlemanProfile,getAllProfiles} = require('../controller/middleman')
const router = express.Router();


router
.route('/')
.post(jwtVerify,isMiddleman,createMiddlemanProfile)
.get(jwtVerify,getAllProfiles)


module.exports = router