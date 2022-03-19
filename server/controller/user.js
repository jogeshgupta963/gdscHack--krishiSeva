

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const user = require('../models/user')


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

function login(req, res) {

    try {
        res.status(200).json(req.body)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

module.exports = { postUser }