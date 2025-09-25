const express = require('express')
const router = express.Router()

router.get('/login',(req,res)=>{
     res.render("user/login", { title: "User Login" });
})
router.get('/register',(req,res)=>{
    res.render('user/register',{title:"Register page"});
})

router.post('/register', (req,res)=>{
    console.log(req.body)
    res.json(req.body)
})

module.exports= router