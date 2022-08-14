
    //**Start of Importing Packages*****//
    const express = require('express');
    const { createRoom ,updateRoom,deleteRoom,getRoom,allRooms} = require('../controllers/roomController');
    const { verifyToken, verifyUser, verifyAdmin } = require('../utils/verifyToken');
    const router = express.Router();
    //**End of Importing Packages******/
    //**End of Importing Packages******/
    
    
    //***Create Room***//
    router.post('/:hotelId', verifyAdmin,createRoom);
    

    //***Update Room***//
    router.put('/:id',verifyAdmin,updateRoom);


    //***Delete Room***//
    router.delete('/:id/:hotelId',verifyAdmin,deleteRoom);

    //***Get Room***//
    router.get('/:id',verifyUser,getRoom);


    //***All Rooms***//
    router.get('/',verifyUser,allRooms);
    

    //**Exporting Route****//
    module.exports = router;