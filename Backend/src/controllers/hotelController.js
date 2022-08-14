
    const Hotel = require('../models/Hotel');
    const { createError } = require('../utils/error');

    //***Create Hotel***//
    exports.createHotel = async (req,res,next)=>{
        try {   
            const createHotel = new Hotel(req.body);
            createHotel.save();
            res.status(200).json(createHotel);
        } catch (error) {
            next(error);
        }
    };

     //***Update Hotel***//
    exports.updateHotel = async (req,res,next)=>{
        
        try {   
            const updateHotel  = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(200).json(updateHotel);
        } catch (error) {
            next(error);
        }
    }

     //***Delete Hotel***//
    exports.deleteHotel = async (req,res,next)=>{
        
      
        try {   
            await Hotel.findByIdAndDelete(req.params.id);
            res.status(200).json("Hotel has been deleted successfully!");
        } catch (error) {
            next(error);
        }
    }

    
    //***Get Hotel***//
    exports.getHotel = async (req,res,next)=>{
        
        
        try {   
           const hotel = await Hotel.findById(req.params.id);
            res.status(200).json(hotel);
        } catch (error) {
            next(error);
        }
   }
   
   //***All Hotels***//
   exports.allHotels = async (req,res,next)=>{
        
    
    
        try { 
            const hotels = await Hotel.find();
            res.status(200).json(hotels);
        } catch (error) {
            next(error)
        }
    }