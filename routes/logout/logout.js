let router=require('express').Router();
let getdata=require('../../controllers/user_controller');
router.get('/',(req,res)=>{
    getdata.handlelogout(req,res);
});
module.exports=router;