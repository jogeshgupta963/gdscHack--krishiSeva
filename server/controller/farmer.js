const { path } = require('express/lib/application')
const Farmer = require('../models/Farmer')
const User = require('../models/User')

//@Route   /api/v1/profile
//@desc    Post create profile
//@access  Private

async function createFarmerProfile(req,res){

  try {
      const {landAvailability,location,budget,rating} =req.body

      const isExist = await Farmer.findOne({user:req.user._id})
      if(isExist){
        return res.status(400).json({status:false,msg:"Profile Already Exists"})    
      }
      if((await User.findById(req.user._id)).designation !== 'Farmer' ){
        res.status(400).json({status:false,msg:"Not Permitted"})  
      }
      const profile = new Farmer({
        user:req.user._id,
        landAvailability,
        location,
        budget,
        rating
      })
      await profile.save();
      res.status(200).json({status:true,msg:"Profile Created"})

  } catch (err) {
    res.status(400).json({status:false,msg:err.message})
  }
  
}

//@Route   /api/v1/profile
//@desc    GET to get all farmerProfile
//@access  public

async function getAllFarmerProfile(req,res){
  try {
    const allProfile = await Farmer.find().populate('user',"name phoneNumber")
    res.json(allProfile)
  } catch (err) {
    res.status(400).json({status:false,msg:err.message})
  }
}

//@Route   /api/v1/profile/:_id
//@desc    GET to get  farmerProfile by id
//@access  public
async function getFarmerProfileById(req,res){
  try {
    const {_id} =req.params
    const allProfile = await Farmer.findById(_id).populate('user',"name phoneNumber")
    res.json(allProfile)
  } catch (err) {
    res.status(400).json({status:false,msg:err.message})
  }
}
//@Route   /api/v1/profile/:_id
//@desc    PUT to update farmerProfile by id
//@access  private
async function updateFarmerProfile(req,res){
  
  try {
    const {_id} = req.params
    const data = req.body
    const profile = await Farmer.findById({_id})
    if(!profile)
    res.status(500).json('Profile doesnt exist');

    //updating data in profile
     Object.keys(data).filter(key =>{ 
      if(key in profile){
        profile[key] = data[key]
      }
    } )
    
    await profile.save();
    res.status(200).json({success:true,msg:'profile updated'});
  } catch (er) {
    res.status(400).json({status:false,msg:err.message})
  }
}
//@Route   /api/v1/profile/
//@desc    DELETE to get  farmerProfile by id
//@access  private
async function deleteFarmerProfile(req,res){
  try {

    const deleteProfile = await Farmer.findOneAndDelete( {user:req.user._id})
    
    res.status(200).json({status:false,msg:"profile deleted"})
  } catch (err) {
    res.status(400).json({status:false,msg:err.message})
  }
}

module.exports ={createFarmerProfile,getAllFarmerProfile,getFarmerProfileById ,updateFarmerProfile,deleteFarmerProfile }