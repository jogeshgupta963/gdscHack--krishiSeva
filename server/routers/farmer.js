const express = require('express')
const path = require('path')
const farmer = require('../models/farmer')
const { postFarmer, getAllProfiles, getHome } = require('../controller/farmer.js')
const { jwtVerify } = require('../helper/authHelper')
const farmerRouter = express.Router();

//@route  POST /api/v1/farmer/profile
//desc to create farmer profile
//access private
farmerRouter
    .route('/profile')
    .post(postFarmer)
    .get(getAllProfiles)
//@route  POST /api/v1/farmer/profile
//desc to create farmer profile
//access private
farmerRouter
    .route('/home')
    .get(getHome)

farmerRouter
    .route("/collaborate")
    .get((req, res) => {
        res.sendFile(path.join(__dirname, "../../client/collaborate.html"));
    });
farmerRouter
    .route("/chat")
    .get((req, res) => {
        res.sendFile(path.join(__dirname, "../../client/help.html"));
    });

module.exports = farmerRouter