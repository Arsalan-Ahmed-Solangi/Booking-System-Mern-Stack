
    const User = require('../models/User');
    const { createError } = require('../utils/error');

    

     //***Update User***//
    exports.updateUser = async (req,res,next)=>{
        
        try {   
            const updateUser  = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(200).json(updateUser);
        } catch (error) {
            next(error);
        }
    }

     //***Delete User***//
    exports.deleteUser = async (req,res,next)=>{
        
      
        try {   
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted successfully!");
        } catch (error) {
            next(error);
        }
    }

    
    //***Get User***//
    exports.getUser = async (req,res,next)=>{
        
        
        try {   
           const user = await User.findById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
   }
   
   //***All Users***//
   exports.allUsers = async (req,res,next)=>{
        
       
        try { 
            const Users = await User.find();
            res.status(200).json(Users);
        } catch (error) {
            next(error)
        }
    }