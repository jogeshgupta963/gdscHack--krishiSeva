const farmer = require('../models/farmer')


async function postFarmer(req, res) {

    try {
        let userData = req.body
        let data = await farmer.create(userData)
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports = { postFarmer }