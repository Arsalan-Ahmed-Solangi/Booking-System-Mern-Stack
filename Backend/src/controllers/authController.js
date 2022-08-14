
   const { createError } = require('../utils/error');
   const User  = require('../models/User');
   const jwt = require('jsonwebtoken');
   const bcrypt = require('bcryptjs');

   //**Register****//
   exports.register = async (req,res,next) => {
        
        try {
            
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(req.body.password, salt);

            const user = new User({
                username :req.body.username,
                email :req.body.email,
                password :hash,
            });

            await user.save();
            res.status(200).json("User has been created!");
        } catch (error) {
            next(error)
        }

    }


     //**Login****//
     exports.login = async(req,res,next)=>{

        try {

            const user = await User.findOne({username:req.body.username});
            if(!user) return next(createError(404,"User not found!"));
            
            const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password);
            if(!isPasswordCorrect) return next(createError(404,"Wrong password or username!"));


            //***Json Token Signin***//
            const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},"arsolangi");

            const {password,isAdmin,...otherDetails} = user._doc;
            res.cookie("access_token",token,{
                httpOnly:true
            }).status(200).json({...otherDetails});

        } catch (error) {
            next(error)
        }
            
     }

