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
async function getProfile(req,res){
    try{
        const {id} = req.params;
        const user = await Middleman.findById(id).populate('user','phoneNumber name');

        if(!user) return res.status(404).json("user not found");

        res.status(200).json({status:true,data:user});

    }catch(Err){
        res.status(500).json({status:false,err:Err.message})
    }
}

async function updateProfile(req,res){
    try {
        const {id} = req.params;
        const user = await Middleman.findById(id)

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

async function deleteProfile(req,res){
    try {
        const {id} = req.params;

        const user = await Middleman.findByIdAndDelete(id);

        res.status(200).json({
            status:true,
            msg:"profile deleted successfully"
        })
    } catch (err) {
        res.status(500).json(err.message);
    }
}


module.exports = {createMiddlemanProfile,getAllProfiles,getProfile,updateProfile,deleteProfile};