
    //**Start of Importing Packages*****//
    const express = require('express');
    const { createHotel,updateHotel,deleteHotel,getHotel,allHotels } = require('../controllers/hotelController');
    const { verifyAdmin, verifyUser } = require('../utils/verifyToken');
    const router = express.Router();

    //**End of Importing Packages******/
    
    
    //***Create Hotel***//
    router.post('/', verifyAdmin,createHotel);
    

    //***Update Hotel***//
    router.put('/:id',verifyAdmin,updateHotel);


    //***Delete Hotel***//
    router.delete('/:id',verifyAdmin,deleteHotel);

    //***Get Hotel***//
    router.get('/:id',verifyUser,getHotel);


    //***All Hotels***//
    router.get('/',verifyUser,allHotels);

    

    //**Exporting Route****//
    module.exports = router;