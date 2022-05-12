const mongoose = require('mongoose');

const middlemanSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    rating:{
        type:Number
    },
    documents:{
        type:"String",

    },
    license:{
        type:String
    },
    bio:{
        type:String
    },
    referals:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'farmer'
        }
    ],
    loan:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'farmer'
        }
    ]
})

const Middleman = mongoose.model('middleman',middlemanSchema)

module.exports = Middleman