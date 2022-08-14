
    const Hotel = require('../models/Hotel');
const Room = require('../models/Room');
    const { createError } = require('../utils/error');

    //***Create User***//
     exports.createRoom = async (req,res,next)=>{
        
        
        const hotelId = req.params.hotelId;
        const newRoom = new Room(req.body);
        try {   
            const room = await newRoom.save();
            try {
                await Hotel.findByIdAndUpdate(hotelId,{$push : {rooms:room._id}}); 
            } catch (error) { 
                next(error);
            }

            res.status(200).json(room);
        } catch (error) {
            next(error);
        }
    }

     //***Update Room***//
    exports.updateRoom = async (req,res,next)=>{
      
        try {   
            const updateRoom = await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new :true});

            res.status(200).json(updateRoom);
        } catch (error) {
            next(error);
        }
    }

     //***Delete Room***//
    exports.deleteRoom = async (req,res,next)=>{
        
        const hotelId = req.params.hotelId;
        try {   
            await Room.findByIdAndDelete(req.params.id);
            try {
                await Hotel.findByIdAndUpdate(hotelId,{
                    $pull:{rooms:req.params.id}
                })
            } catch (error) {
                next(error);
            }
            res.status(200).json("Room has been deleted successfully!");
        } catch (error) {
            next(error);
        }
    }

    
    //***Get Room***//
    exports.getRoom = async (req,res,next)=>{
        
        
        try {   
           const room = await Room.findById(req.params.id);
            res.status(200).json(room);
        } catch (error) {
            next(error);
        }
   }
   
   //***All Rooms***//
   exports.allRooms = async (req,res,next)=>{
        
       
        try { 
            const rooms = await Room.find();
            res.status(200).json(rooms);
        } catch (error) {
            next(error)
        }
    }