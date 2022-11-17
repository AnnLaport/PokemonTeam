const express = require("express");
const router =express.Router();
const userSchema= require("../models/user.js");
const {registerUser, authUser}=require("../controllers/userController.js")

//Create user 
/*router.post("/users", (req, res)=>{
    const user= userSchema(req.body);
    user
    .save()
    .then((data)=>res.json(data))
    .catch((error=>res.json({message:error})))
});   */
//register an user
router.post("/users", registerUser)

//login
router.post("/login", authUser)

//Bring the users
router.get("/users", (req, res)=>{
    userSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error=>res.json({message:error})))
});

//update a user
router.put("/users/:id", (req, res)=>{
    const {id}= req.params;
    const {name,password}=req.body;
    userSchema
    .updateOne({_id:id},{$set:{name,password}})
    .then((data)=>res.json(data))
    .catch((error=>res.json({message:error})))
});

//bring a user
router.get("/users/:id", (req, res)=>{
    const {id}= req.params;
    userSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error=>res.json({message:error})))
});

//delete a user
router.delete("/users/:id", (req, res)=>{
    const {id}= req.params;
    userSchema
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error=>res.json({message:error})))
});

//bring a user by name
router.get("/users/name/:id", (req, res)=>{
    const {id}= req.params;
    userSchema
    .find({name:id})
    .then((data)=>res.json(data))
    .catch((error=>res.json({message:error})))
});

//bring a user by email
router.get("/users/name/:id", (req, res)=>{
    const {id}= req.params;
    userSchema
    .find({email:id})
    .then((data)=>res.json(data))
    .catch((error=>res.json({message:error})))
});

module.exports=router;