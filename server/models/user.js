const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    phoneNumber:{
        type: Int64
    },
    password:{
        type: String
    },
})

const user = mongoose.model('user', userSchema)
module.exports = user