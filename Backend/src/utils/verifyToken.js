
    const jwt = require('jsonwebtoken');
    const { createError } = require('../utils/error');

    exports.verifyToken = (req,res,next) => {

        const token = req.cookies.access_token;
        if(!token){
            return next(createError(401,"You are not authenticated!")); 
        }

        jwt.verify(token,'arsolangi',(error,user)=>{
            if(error){
                return next(createError(403,"Token is not valid!"));
                
            }
            req.user = user;
            next();
        });

    }
    
    exports.verifyUser = (req,res,next)=>{
        this.verifyToken(req,res,next,()=>{
            if(req.user.id === req.params.id || req.user.isAdmin){
                next();
            }else{
                 return next(createError(403,"You are not authorized1"));
            }
        });
    }


    exports.verifyAdmin = (req,res,next)=>{
        this.verifyToken(req,res,next,()=>{
            if(req.user.isAdmin){
                next();
            }else{
                 return next(createError(403,"You are not authorized1"));
            }
        });
    }