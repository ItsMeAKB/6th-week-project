const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const auth = require ('../middleware/auth')

// router.get('/login',(req,res)=>{
//      res.render("user/login", { title: "User Login" });
// })
// router.get('/register',(req,res)=>{
//     res.render('user/register',{title:"Register page"});
// })

router.get('/login',auth.isLogin, userController.loadLogin);

router.post('/login',userController.login)

router.get("/register",auth.isLogin, userController.loadRegister)

router.post('/register',userController.registerUser )

router.get("/home",auth.checkSession, userController.loadHome)

router.get('/logout',auth.checkSession,userController.logout)

module.exports= router