

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
require('dotenv').config();
const user = require('../models/user')
const path = require('path');

async function postUser(req, res) {

    try {
        let userData = req.body
        //hashing password
        let salt = await bcrypt.genSalt();
        let hashedString = await bcrypt.hash(userData.password, salt.toString());
        userData.password = hashedString;
        //creating user
        let farmer = await user.create(userData)
        //creating jwt

        const JWT = jwt.sign({ payload: farmer._id }, process.env.JWT_SECRET, { expiresIn: 3600 })

        res.cookie("JWT", JWT, { httpOnly: true })
        res.status(200).json(JWT)
    } catch (err) {
        res.status(400).json(err.message);
    }
}

async function login(req, res) {

    try {
        let { phoneNumber, password } = req.body;
        let data = await user.findOne({ phoneNumber })

        if (!data) {
            return res.status(400).json({ type: "failed", msg: "Invalid Credentials" })
        }
        let matchPass = await bcrypt.compare(password, data.password)
        if (!matchPass) {
            return res.status(400).json({ type: "failed", msg: "Invalid Credentials" })
        }
        const JWT = jwt.sign({ payload: data._id }, process.env.JWT_SECRET, { expiresIn: 60 })
        res.cookie("JWT", JWT, { httpOnly: true })
        // res.status(200).json(JWT)
        res.status(200).json({
            type: "success",
        })

    } catch (err) {
        console.log(err.message)
        res.status(400).json(err.message)
    }
}

function getLogin(req, res) {
    // res.sendFile(path.join(__dirname,"../public/","login.html"));
    res.sendFile(path.join(__dirname, "../../client/login.html"))
}

function getSignup(req, res) {
    res.sendFile(path.join(__dirname, "../../client/register.html"))
}

module.exports = { postUser, login, getLogin, getSignup }