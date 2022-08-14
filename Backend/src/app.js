
    //**Start of Importing Packages*****//
    const express = require('express');
    const app = express();
    const dotenv = require('dotenv');
    const mongoose = require('mongoose');
    const cookieParser = require('cookie-parser');
    dotenv.config();  
    const port = 5000;
    //**End of Importing Packages******/


    //***Start of Require Routes****//
    const authRoute = require('./routes/auth');
    const hotelRoute = require('./routes/hotels');
    const roomRoute = require('./routes/rooms');
    const userRoute = require('./routes/users');
    //***End of Require Routes****//

    //**Start of Connecting Database***//
    const connect = async () =>{
        try {
            await mongoose.connect(process.env.DB);
            console.log("Database Connected!");
        } catch (error) {
          throw error;
        }
    }
    mongoose.connection.on("disconnected",()=>{
        console.log("Database Disconnected!");
    });
    //**End of Connecting Database****//7

    //**Cookie Parser Middleware***//
    app.use(cookieParser());
    
    //**Json Middleware***//
    app.use(express.json());
        
    //***Start of Use Routes****//
    app.use('/api/auth',authRoute);
    app.use('/api/user',userRoute);
    app.use('/api/room',roomRoute);
    app.use('/api/hotel',hotelRoute);
    //***End of Use Routes*****//
    

    //***Error Message Middleware****//
    app.use((error,req,res,next)=>{
        const errorStatus = error.status || 500;
        const errorMessage = error.message || "Something went wrong!";

        return res.status(errorStatus).json({
            success:false,
            status:errorStatus,
            message : errorMessage,
            stack:error.stack,
        })
    });

    //**Start of Listening Port****//
    app.listen(port,()=>{
        connect()
        console.log("Listening on Port No 5000");
    });
    //**End of Listening Port*****//