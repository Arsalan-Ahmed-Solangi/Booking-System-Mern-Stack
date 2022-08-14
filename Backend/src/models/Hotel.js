
    //**Require Mongoose Package****//
    const mongoose = require('mongoose');


    //***Creating Schema****//
    const hotelSchema = new mongoose.Schema({


        name : {
            type : String,
            required : true,
        },

        type : {
            type : String,
            required: true,
        },

        city : {
            type : String,
            required : true,
        },
        address : {
            type : String,
            required : true,
        },

        distance : {
            type : String,
            required : true,

        },

        photos : {
            type : [String],
            required : true,
        },
        title : {
            type : String,
            required : true,
        },
        desc : {
            type : String,
            required : true,
        },

        rating : {
            type : Number,
            min : 0,
            max : 5,
        },
        rooms : {
            type : [String],

        },
        cheapestPrice : {
            type : Number,
            required : true,
        },
        featured : {
            type : Boolean,
         
        }

    });


    //**Exporting Model****//
    module.exports = mongoose.model("Hotel",hotelSchema);