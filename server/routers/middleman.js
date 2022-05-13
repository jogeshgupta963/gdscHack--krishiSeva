const express = require('express');


const {jwtVerify,isExpert,isMiddleman} = require('../middleware/authHelper')
const {createMiddlemanProfile,getAllProfiles,getProfile,updateProfile,deleteProfile} = require('../controller/middleman')
const router = express.Router();


router
.route('/')
.post(jwtVerify,isMiddleman,createMiddlemanProfile)
.get(jwtVerify,getAllProfiles)


router
.route('/:id')
.get(jwtVerify,getProfile)
.put(jwtVerify,isMiddleman,updateProfile)
.delete(jwtVerify,isMiddleman,deleteProfile)

module.exports = router