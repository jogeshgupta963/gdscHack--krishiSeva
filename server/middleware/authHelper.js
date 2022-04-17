require('dotenv').config();
const jwt = require('jsonwebtoken')
const User = require('../models/User')

async function jwtVerify(req, res, next) {
    
    try {
        let token = req.cookies.JWT

        let isLoggedIn = jwt.verify(token, process.env.JWT_SECRET)
        if(!isLoggedIn)
        return res.status(400).json({status:false,msg:"Unauthorised access is not permited"})

        req.user = await User.findById(isLoggedIn.user);
        req.token = token;

        next()

        
        } catch (error) {
        console.log(error.message);
        res.status(400).json({status:false,msg:"Unauthorised access is not permited."})
    }

}

module.exports = { jwtVerify }