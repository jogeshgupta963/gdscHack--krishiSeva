
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


//@route /api/v1/expert
//@desc GET to get experts profile
//@access private/isExpert

async function getAllExperts(req,res){
    try {
        let profiles = await Expert.find();

        res.status(200).json({status:true,data:profiles})
    } catch (err) {
        res.status(500).json(err.message);
    }
}
//@route /api/v1/expert/:id
//@desc POST to get experts profile
//@access private/isExpert

async function getExpertProfile(req,res){
    try{
        const {id} = req.params;
        const user = await Expert.findById(id).populate('user','phoneNumber name');

        if(!user) return res.status(404).json("user not found");

        res.status(200).json({status:true,data:user});

    }
    catch(err){
        res.status(500).json(err.message);
    }
}

//@route /api/v1/expert/:id
//@desc PUT to update experts profile
//@access private/isExpert

async function updateExpertProfile(req,res){
    try {
        const {id} = req.params;
        const user = await Expert.findById(id)

        if(!user) return res.status(404).json("user not found");

        let reqKeys = Object.keys(req.body);

        reqKeys.map(key=>{
            user[key] = req.body[key];
        })
        await user.save();
        res.status(200).json({
            status:true,
            msg:"updated profile successfully"
        })

    } catch (err) {
        res.status(500).json(err.message)
    }
}


async function deleteExpertProfile(req,res){
    try {
        const {id} = req.params;

        const user = await Expert.findByIdAndDelete(id);

        res.status(200).json({
            status:true,
            msg:"profile deleted successfully"
        })
    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports = {createExpert,getAllExperts,getExpertProfile,updateExpertProfile,deleteExpertProfile};