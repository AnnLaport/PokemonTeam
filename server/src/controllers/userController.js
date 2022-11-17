const asynchandler= require("express-async-handler");
const User=require("../models/user");
const generateToken = require("../utils/generateToken");


const registerUser=asynchandler(async(req,res)=>{
    const {name,email,password}=req.body;

    const userExists=await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("User Already Exists");
    }

    const user=await User.create({
        name,
        password,
        email
    });

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            token: generateToken(user._id)
        })
    }else{
        res.status(400);
        throw new Error("Error Ocurrred!");
    }
});

const authUser=asynchandler(async(req,res)=>{
    const {email,password}=req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400);
        throw new Error("The email or password was incorrect");
    }
    
});


module.exports={registerUser, authUser};