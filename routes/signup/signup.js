let router=require('express').Router();
let getdata=require('../../controllers/user_controller');
router.post('/',(req,res)=>{
    getdata.handlepostdata(req,res);
})

module.exports=router;