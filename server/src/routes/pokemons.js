const express = require("express");
const router =express.Router();
const userSchema= require("../models/pokemon.js");

//Adding a pokemon 
router.post("/addpokemon", (req, res)=>{
    const user= userSchema(req.body);
    user
    .save()
    .then((data)=>res.json(data))
    .catch((error=>res.json({message:error})))
});

//Bring all the pokemon currently on the team
router.get("/pokemon", (req, res)=>{
    userSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error=>res.json({message:error})))
});

//bring a pokemon of certain user
router.get("/pokemon/:id", (req, res)=>{
    const {id}= req.params;
    userSchema
    .find({trainer:id}) 
    .then((data)=>res.json(data))
    .catch((error=>res.json({message:error})))
});

//delete a pokemon
router.delete("/pokemon/:id", (req, res)=>{
    const {id}= req.params;
    userSchema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error=>res.json({message:error})))
});

module.exports=router;