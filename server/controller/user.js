const user = require('../models/user')


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

module.exports = { postUser }