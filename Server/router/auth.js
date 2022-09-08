const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send('hello world from the server router js ');
});

// router.post('/register', (req, res) => {
//     const { name, email, password, cpassword } = req.body;
//     console.log(res.body);

//     if (!name || !email || !password || !cpassword) {
//         return res.status(422).json({ error: "Fill kar " });
//     }
//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "Kitne bar register  Kare re bhai tu" });
//             }

//             const user = new User({ name, email, password, cpassword });

//             user.save().then(() => {
//                 res.status(201).json({ message: "user registered succesfully" });

//             }).catch((err) => res.status(500).json({ error: "Failed to registed" }));
//         }).catch(err => { console.log(err); });

// });

//Async await
router.post('/register', async(req, res) => {
    const { name, email, password, cpassword } = req.body;
    console.log(res.body);

    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Please Fill the details" });
    }
try {

    const userExist =await User.findOne({ email: email });

        if(userExist){
            return res.status(422).json({ error: "Email already Exist" });
        }else if(password != cpassword){
            return res.status(422).json({ error: "Password are not matching" });
        }else {
            const user = new User({ name, email, password, cpassword });
       

        await user.save();
        
        res.status(201).json({ message: "User registered succesfully" });

        }
        

    
    } catch (error) {
    console.log(error);


    
    }
});

router.post('/login', async(req,res)=>{
     console.log(req.body);
    // res.json({message:"awwsome"});
    
    try {
        let token;
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(422).json({ error: "Invaild" });
        }

        const  userLogin =await User.findOne({email:email});
        console.log(userLogin);

        if(userLogin){
            const isMatch =await bcrypt.compare(password,userLogin.password);
            
            token = await userLogin.generateAuthToken();
            console.log(token);

            res. cookie("jwtoken",token,{
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });

         if(!isMatch){
            res.status(400).json({error :"Invalid Credientials"});
        } else {
            res.json({message:"USer login Successfully"});
        } 
        }else {
            res.status(400).json({error :"Invalid Credientials"});
        }
        

        

    } catch (error) {
        console.log(error);
    }
});


module.exports = router;