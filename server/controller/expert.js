
const Expert = require('../models/Expert')
const User = require('../models/User')


//@route /api/v1/expert
//@desc POST to create experts profile
//@access private/isExpert

async function createExpert(req,res){
    try {
        const {rating,noOfDoubtsSolved,bio} =req.body

        const isExist = await Expert.findOne({user:req.user._id})
        if(isExist){
            return res.status(400).json({status:false,msg:"Profile Already Exists"})    
          }
          const profile = new Expert({
            user:req.user._id,
            rating,
            noOfDoubtsSolved,
            bio
          })
          await profile.save();
          res.status(200).json({status:true,msg:"Profile created successfully"});
    } catch (err) {
        res.status(500).json(err.message);
    }
}


async function getAllExperts(req,res){
    try {
        let profiles = await Expert.find();

        res.status(200).json({status:true,data:profiles})
    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports = {createExpert,getAllExperts};