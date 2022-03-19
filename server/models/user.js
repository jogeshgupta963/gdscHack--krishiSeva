const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
})

const user = mongoose.model('user', userSchema)
module.exports = user