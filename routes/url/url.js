let router=require('express').Router();
let getdata=require('../../controllers/url_controller');
let path=require('path');
router.use('/shorturl', require(path.join(__dirname,'/createurl/createurl')));
router.use('/delete', require(path.join(__dirname,'/deleteurl/deleteurl')));
router.use('/analytics', require(path.join(__dirname,'/analytics/analytics')));
router.use('/admin_analytics',require(path.join(__dirname,'/admin_analytics/admin_analytics')));
router.post('/',(req,res)=>{
    getdata.handleposturl(req,res);
});
module.exports=router;