const { kMaxLength } = require('buffer');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        maxLength: 10,
        required: true
    },
    password: {
        type: String,
        minLength: 8,
        required: true
    },
})

const user = mongoose.model('user', userSchema)
module.exports = user