const { kMaxLength } = require('buffer');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({


    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        maxLength: 10,
        required: true
    },
    password: {
        type: String,
        minLength: 8,
        required: true
    },
    designation:{
        type:String,
        enum:["Farmer","Expert","Middlemen"],
        default:"Farmer"
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User