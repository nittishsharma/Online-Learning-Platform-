const dotenv = require("dotenv");
const express =require ('express');
const mongoose  = require('mongoose');
const app= express();
require('dotenv').config();


//dotenv.config({path:'./config.env'});
require('./db/conn');
//const User =require('./model/userSchema');

app.use(express.json());
// Router files 
app.use(require('./router/auth'));

const PORT =process.env.PORT;




// app.get('/',(req,res) =>{
//     res.send('hello world');
// });

app.get('/login',(req,res) =>{
    res.send('hello world form login');
});

// app.get('/register',(req,res) =>{
//     res.send('hello world form register');
// });

app.listen(PORT,() => {
    console.log('Server is running ',{PORT});
})