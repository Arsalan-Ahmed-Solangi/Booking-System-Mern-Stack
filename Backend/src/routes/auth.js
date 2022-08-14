
    //**Start of Importing Packages*****//
    const express = require('express');
    const { register,login } = require('../controllers/authController');
    const router = express.Router();
    //**End of Importing Packages******/
    

    //**Register***//
    router.post('/register',register);
    
    //**Login***//
    router.post('/login',login);

    //**Exporting Route****//
    module.exports = router;