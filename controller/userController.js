const userSchema =require('../model/userModel')

const registerUser = async(req,res)=>{
    try{

        const {email,password}=req.body
        // console.log(req.body)

        const user = await userSchema.findOne({email})

        if(user) return res.render('user/register', {message :'User alredy exists'})
        const newUser = new userSchema({
            email:email,
            password:password,
        })
        await newUser.save()
        console.log(newUser)

        res.redirect('/user/login')

    } 
    catch(error){
        console.log("error in register",error)
    }
    
}


module.exports = {registerUser}