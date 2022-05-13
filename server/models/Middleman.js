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
            farmer:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'farmer'
        },
        referContent:{
            type:String,
        }
        }
    ],
    loan:[
        {
            farmer:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'farmer'
            },
            loanAmount:{
                type:Number,
            }
        }
    ]
})

const Middleman = mongoose.model('middleman',middlemanSchema)

module.exports = Middleman