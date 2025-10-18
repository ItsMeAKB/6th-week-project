const userSchema = require('../model/userModel');
const bcrypt = require('bcrypt');
const saltround = 10;

// REGISTER USER
const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await userSchema.findOne({ email });
    if (existingUser) {
      return res.render('user/register', { message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, saltround);

    const newUser = new userSchema({
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log('User registered:', newUser.email);

    res.redirect('/user/login');
  } catch (error) {
    console.log('Error in register:', error);
    res.status(500).send('Server Error');
  }
};


//If the user is already logged in
const loadRegister =(req,res)=>{
  if(req.session.user){
    return res.redirect('/user/home')
  }
  res.render('user/register')
}


const loadLogin = (req, res) => {
  if(req.session.user){
    return res.redirect('/user/home')
  }
  const message = req.session.message
  req.session.message =null;
  res.render("user/login",{message});
};

const loadHome = (req,res)=>{
  res.render('user/home')
}
 

// LOGIN USER
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email,password)

    const user = await userSchema.findOne({ email });
    console.log(user);
    
    if (!user) {
      return res.render("user/login", { message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch)
    if (!isMatch) {
      return res.render("user/login", { message: "Incorrect password" });
    }

    req.session.user = {

      username: user.email,
      id: user._id,
    };

    req.session.user =true

    res.render("user/home",{email:user.email});
  } catch (error) {
    console.log("Error in login:", error);
    res.render("user/login", { message: "Something went wrong" });
  }
};

module.exports = { registerUser, 
                   loadRegister, 
                   login, 
                   loadLogin,
                   loadHome, 
                  };
