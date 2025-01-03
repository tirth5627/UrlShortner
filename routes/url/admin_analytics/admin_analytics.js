let router=require('express').Router();
let getdata=require('../../../controllers/url_controller');
router.get('/',(req,res)=>{
    getdata.handlegetadminanalytics(req,res);
});
module.exports=router;