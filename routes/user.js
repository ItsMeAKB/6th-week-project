const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const auth = require ('../middleware/auth')

router.get('/login',(req,res)=>{
     res.render("user/login", { title: "User Login" });
})
router.get('/register',(req,res)=>{
    res.render('user/register',{title:"Register page"});
})

router.post('/login',userController.login)

router.get("/register",auth.isLogin, userController.loadRegister)

router.get('/login',auth.isLogin, userController.loadLogin);

router.get("/home",auth.checkSession, userController.loadHome)




router.post('/register', userController.registerUser )

module.exports= router