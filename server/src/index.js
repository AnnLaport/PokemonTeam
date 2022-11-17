const express= require('express');
const mongoose= require('mongoose');
const cors=require('cors')
require("dotenv").config();
const userRoutes = require("./routes/users");
const userRoutesPokemon = require("./routes/pokemons");
const { not_Found, errorHandler } = require('./middleware/errorHandler');

const app= express();
const port= process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use(cors());
app.use('/api', userRoutes);
app.use('/api', userRoutesPokemon);
app.use(not_Found);
app.use(errorHandler);

app.get('/', (req,res)=>{
    res.send('Welcome to my app');
})

mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("connected to Atlas"))
.catch((error)=>console.error(error));

app.listen(port, ()=>console.log('server listening on port', port));