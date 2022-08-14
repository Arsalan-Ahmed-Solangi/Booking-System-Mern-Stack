
    //**Require Mongoose Package****//
    const mongoose = require('mongoose');


    //***Creating Schema****//
    const userSchema = new mongoose.Schema({


        username : {
            type : String,
            required : true,
            unique:true,
        },

        email : {
            type : String,
            required : true,
            unique:true,
        },

        password : {
            type : String,
            required : true,
        
        },
        isAdmin : {
            type : Boolean,
            default :false,
         
        }

    },{timestamps:true});


    //**Exporting Model****//
    module.exports = mongoose.model("User",userSchema);