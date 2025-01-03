let router=require('express').Router();
let getdata=require('../../../controllers/url_controller');
router.get('/',(req,res)=>{
    if(req.query.shorturl){
        getdata.handlegetredirect(req,res);
    }else {
        res.render('urlshortner', {url: req.protocol + "://" + req.headers.host, shortUrl: ""});
    }
});
module.exports=router;