let {getuser}=require('../services/auth');
let checkloginauth=(req,res,next)=>{
    if(!req.cookies.sessionid){
        if(req.url==='/analytics'){
            res.render('index', {url: req.protocol + "://" + req.headers.host,data:[],message:"",islogin:false});
        }else{
        res.render('index', {url: req.protocol + "://" + req.headers.host,data:[],message:"LoginFailed",islogin:false});
        }
    }else{
        let sessionid=req.cookies.sessionid;
        let user=getuser(sessionid);
        if(user){
            req.user=user;
            next();
        }else{
            if(req.url==='/urlshortner/analytics'){
                res.render('index', {url: req.protocol + "://" + req.headers.host,data:[],message:"",islogin:false});
            }
            else{
            res.render('index', {url: req.protocol + "://" + req.headers.host,data:[],message:"LoginFailed",islogin:false});
            }
        }
    }
}
module.exports=checkloginauth