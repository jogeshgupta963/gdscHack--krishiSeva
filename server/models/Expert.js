const mongoose = require('mongoose');

const expertSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    rating:{
        type:Number
    },
    noOfDoubtsSolved:{
        type:Number
    },
    bio:{
        type:String
    }
})

const Expert = mongoose.model('expert',expertSchema);
module.exports = Expert;