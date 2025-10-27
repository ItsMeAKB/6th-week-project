const checkSession = (req,res,next)=>{
    if(req.session.admin && req.session){
        next()
    } else {
        res.redirect('/admin/login')
    }
}

const isLogin = (req,res,next) =>{
    if(req.session.admin&& req.session){
        res.redirect('/admin/dashboard')
    } else {
        next()
    }
}

module.exports = {checkSession,isLogin}