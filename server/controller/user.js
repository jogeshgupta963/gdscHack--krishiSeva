const user = require('../models/user')
const path = require('path')


async function postUser(req, res) {

    try {
        let userData = req.body
        let data = await user.create(userData)
        res.status(200).json(req.body)
    } catch (err) {
        res.status(400).json(err.message);
    }
}

function login(req, res){

    try {

        res.status(200).json(req.body)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

function getLogin(req, res){
    // res.sendFile(path.join(__dirname,"../public/","login.html"));
    res.sendFile(path.join(__dirname,"../../client/login.html"))
}

function getSignup(req, res){
    res.sendFile(path.join(__dirname,"../public/","register.html"));
}

module.exports = { postUser,getLogin, getSignup }