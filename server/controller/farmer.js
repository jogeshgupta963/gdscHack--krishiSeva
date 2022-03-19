const farmer = require('../models/farmer');
const user = require('../models/user');


async function postFarmer(req, res) {

    try {
        let userData = req.body
        let data = await farmer.create(userData)
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json(err.message);
    }
}


async function getAllProfiles(req, res) {

    try {
        let allProfs = await farmer.find();
        res.status(200).json({
            type: "success",
            profile: allProfs
        })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

function getHome(req, res) {
    res.sendFile(path.join(__dirname, "../../client/home.html"))
}
module.exports = { postFarmer, getAllProfiles, getHome }