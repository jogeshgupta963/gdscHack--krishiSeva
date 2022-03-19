const farmer = require('../models/farmer')


function postFarmer(req, res) {

    try {
        res.json(req.body)
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports = { postFarmer }