const mongoose = require('mongoose');

const farmerSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    landAvailability: {
        type: String
    },
    location: {
        type: String
    },
    budget: {
        type: Int64
    },
    Rating: {
        type: Int64
    },
})

const farmer = mongoose.model('farmer', farmerSchema)
module.exports = farmer