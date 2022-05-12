

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
require('dotenv').config();
const User = require('../models/User')
const path = require('path');

async function signupUser(req, res) {

    try {
        let userData = req.body

        //checking if user exists already

        const isExist = await User.findOne({phoneNumber:userData.phoneNumber})

        if(isExist){
            return res.status(400).json({status:false,msg:"user already registered"})
        }
        //hashing password
        let salt = await bcrypt.genSalt();
        let hashedString = await bcrypt.hash(userData.password, salt.toString());
        userData.password = hashedString;
        //creating user
        let farmer = await User.create(userData)
        //creating jwt

        const JWT = jwt.sign({ user: farmer._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRESIN,})

        // res.cookie("JWT", JWT,{httpOnly:true})
        res.cookie("JWT", JWT)
        res.status(200).json({status:true,msg:"user registered"})
    } catch (err) {
        res.status(400).json(err.message);
    }
}

async function login(req, res) {

    try {
        let { phoneNumber, password } = req.body;
        let data = await User.findOne({ phoneNumber })

        if (!data) {
            return res.status(400).json({ status:false, msg: "Invalid Credentials" })
        }
        let matchPass = await bcrypt.compare(password, data.password)
        if (!matchPass) {
            return res.status(400).json({ status:false, msg: "Invalid Credentials" })
        }
        const JWT = jwt.sign({ user: data._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRESIN })
        res.cookie("JWT", JWT)
        res.status(200).json({
            status:true,
            msg:"user logged in"
        })

    } catch (err) {
        console.log(err.message)
        res.status(400).json(err.message)
    }
}

async function logout(req,res){
    try {
        req.cookies.JWT='';
        res.cookie('JWT',{maxAge:1})
        res.json("logged out")
    } catch (err) {
    res.status(500).json(err.message);
    }
}

module.exports = { signupUser, login,logout }