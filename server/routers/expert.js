const express = require('express')

const {createExpert,getAllExperts   } = require('../controller/expert')
const {jwtVerify,isExpert} = require('../middleware/authHelper')

const router = express.Router();


router
.route('/')
.post(jwtVerify,isExpert,createExpert)
.get(jwtVerify,getAllExperts)

module.exports=router