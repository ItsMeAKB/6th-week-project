const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.get('/login',(req,res)=>{
     res.render("user/login", { title: "User Login" });
})
router.get('/register',(req,res)=>{
    res.render('user/register',{title:"Register page"});
})



router.post('/register', userController.registerUser )

module.exports= router