const mongoose = require('mongoose');

const farmerSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
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
    rating: {
        type: Number
    },
})

const Farmer = mongoose.model('Farmer', farmerSchema)
module.exports = Farmer