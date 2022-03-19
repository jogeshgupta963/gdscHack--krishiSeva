const mongoose = require('mongoose');

const farmerSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    landAvailability: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        required: true
    },
    Rating: {
        type: String
    },
})

const farmer = mongoose.model('farmer', farmerSchema)
module.exports = farmer