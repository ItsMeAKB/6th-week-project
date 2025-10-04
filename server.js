const express = require("express")
const app = express()
const port = 8080;
const userRoutes = require("./routes/user")
const adminRoutes = require("./routes/admin")
const path = require("path");
const { connect } = require("http2");
const connectDB = require("./db/connectDB");

// const exphbs = require("express-handlebars");


app.set("views",path.join(__dirname,"views"))
app.set("view engine","hbs")
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.use("/user",userRoutes)
app.use("/admin",adminRoutes)
app.get("/",(req,res)=>{
    res.send("Server is done");
});

connectDB()
app.listen(port,()=>{
    console.log(`http://localhost:8080`);
    })  