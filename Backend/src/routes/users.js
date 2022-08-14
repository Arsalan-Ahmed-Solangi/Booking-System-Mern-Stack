
    //**Start of Importing Packages*****//
    const express = require('express');
    const { updateUser, deleteUser, getUser, allUsers } = require('../controllers/userController');
    const { verifyToken, verifyUser, verifyAdmin } = require('../utils/verifyToken');
    const router = express.Router();
    //**End of Importing Packages******/
    

    // //***Check Authentication*****//
    // router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    //     res.send("Hello User , You are Authenticated Now!");
    // });

    // //***Check User*****//
    // router.get("/checkUser/:id",verifyUser,(req,res,next)=>{
    //     res.send("Hello User , You are Authenticated Now and you can delete your account!");
    // });

    //  //***Check Admin*****//
    //  router.get("/checkAdmin/:id",v,(req,res,next)=>{
    //     res.send("Hello Admin , You are Authenticated Now and you can delete all accounts!");
    // });
    
    //***Update User***//
    router.put('/:id',verifyUser,updateUser);


    //***Delete User***//
    router.delete('/:id',verifyUser,deleteUser);

    //***Get User***//
    router.get('/:id',verifyUser,getUser);


    //***All Users***//
    router.get('/',verifyAdmin,allUsers);

    

    

    //**Exporting Route****//
    module.exports = router;