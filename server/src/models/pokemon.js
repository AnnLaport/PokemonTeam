const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    id:{
        type:"Number",
        required:true
    },
    name:{
        type:"String",
        required:true
    },
    trainer:{
        type:"String",
        required: true
    },
    typesPokemon:{
        type:[String],
        required:true
    },
    gender:{
        type:"String",
        required: true
    }
});

module.exports=mongoose.model('Pokemon', userSchema);