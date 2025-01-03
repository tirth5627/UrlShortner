let router=require('express').Router();
let getdata=require('../../controllers/user_controller');
router.get('/',(req,res)=>{
    res.render('login', {url: req.protocol + "://" + req.headers.host,message:""});
})
router.post('/',(req,res)=>{
   getdata.handleredirect(req,res);
})

module.exports=router;