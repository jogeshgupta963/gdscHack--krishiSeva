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

async function isExpert(req,res,next){
    try {
        
        if(req.user && req.user.designation ==='Expert') {
        next()
    }else{
        res.status(401)
        throw new Error('Not authorized as an Admin')
    }
} catch (error) {
        res.status(500).json(error.message)
}
}
async function isMiddleman(req,res,next){
    try {
        
        if(req.user && req.user.designation ==='Middleman') {
            next()
        }else{
            res.status(401)
            throw new Error('Not authorized as an Admin')
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}
async function isFarmer(req,res,next){
    try {
        
        if(req.user && req.user.designation ==='Farmer') {
            next()
        }else{
            res.status(401)
            throw new Error('Not authorized as an Admin')
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = { jwtVerify,isExpert,isMiddleman,isFarmer }