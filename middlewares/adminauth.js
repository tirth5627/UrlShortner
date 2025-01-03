let auth_admin=(req,res,next)=> {
    if(req.user.role==='admin'){
        next();
    }else{
        res.redirect('/urlshortner/analytics');
    }
}
module.exports=auth_admin