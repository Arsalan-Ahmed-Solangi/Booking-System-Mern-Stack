
    //**Require Mongoose Package****//
    const mongoose = require('mongoose');


    //***Creating Schema****//
    const roomSchema = new mongoose.Schema({


        title : {
            type : String,
            required : true,
            unique:true,
        },

        price : {
            type : Number,
            required : true,
        },
        maxPeople : {
            type :Number,
            required :true,
        },
        desc : {
            type : String,
            required : true,
        
        },
        roomNumbers : [{number:Number,unavailableDates:[{type:Date}]}],

    },{timestamps:true});


    //**Exporting Model****//
    module.exports = mongoose.model("Room",roomSchema);