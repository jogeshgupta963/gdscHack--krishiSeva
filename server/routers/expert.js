const express = require('express')

const {createExpert,getAllExperts,getExpertProfile,updateExpertProfile,deleteExpertProfile} = require('../controller/expert')
const {jwtVerify,isExpert} = require('../middleware/authHelper')

const router = express.Router();


router
.route('/')
.post(jwtVerify,isExpert,createExpert)
.get(jwtVerify,getAllExperts)

router
.route('/:id')
.get(jwtVerify,getExpertProfile)
.put(jwtVerify,updateExpertProfile)
.delete(jwtVerify,deleteExpertProfile)
module.exports=router