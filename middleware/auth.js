const checkSession = (req,res,next)=>{
    if(req.session.user && req.session){
        next()
    } else {
        res.redirect('/user/login')
    }
}

const isLogin = (req,res,next) =>{
    if(req.session.user && req.session){
        res.redirect('/user/home')
    } else {
        next()
    }
}

module.exports = {checkSession,isLogin}