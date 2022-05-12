const Middleman = require('../models/Middleman')


async function createMiddlemanProfile(req,res){
    try {
        const {documents,license,bio} = req.body;
        var user = await Middleman.findOne({user:req.user._id}) ;
        
        if(user) return res.status(400).json({status:false,msg:"Profile exists already"});

        const newProfile = await Middleman.create({...req.body})
        // await user.save();
        res.status(200).json({
            status:true,
            msg:"profile created successfully"
        })
        
    } catch (err) {
        res.status(500).json(err.message);
    }
}
async function getAllProfiles(req,res){
    try {
        const profiles = await Middleman.find();
        res.status(200).json({
            status:true,
            data:profiles
        })        
    } catch (err) {
        res.status(500).json(err.message)
    }
}


module.exports = {createMiddlemanProfile,getAllProfiles};