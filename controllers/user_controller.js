let user=require('../models/user')
// let {v4:uuidv4}=require('uuid')
let {setuser}=require('../services/auth')
let handlepostdata=async (req,res)=> {
    let data = req.body;
    let newdata = await user.findOne({email: data.email, password: data.password});
    if (newdata) {
        res.render('login', {url: req.protocol + "://" + req.headers.host,message:"Failed"});
    } else {
       await user.create({
           name:data.name,
           email:data.email,
           password:data.password
       })
        res.render('login', {url: req.protocol + "://" + req.headers.host,message:"Success"});
    }
}
let handleredirect=async (req,res)=>{
    let data=req.body;
    let newdata=await user.findOne({email:data.email,password:data.password});
    if(newdata){
        res.cookie('sessionid',setuser(newdata));
        res.redirect('/urlshortner/analytics');
    }else{
        res.render('login', {url: req.protocol + "://" + req.headers.host,message:"Signup"});
    }
}
let handlelogout=(req,res)=>{
    res.clearCookie('sessionid');
    res.redirect('/');
}
module.exports= {handlepostdata,handleredirect,handlelogout}