var express = require('express');
var router = express.Router();
let path=require('path');
router.use('/urlshortner', require(path.join(__dirname,'../routes/url/url')));
router.use('/login', require(path.join(__dirname,'../routes/login/login')));
router.use('/signup', require(path.join(__dirname,'../routes/signup/signup')));
router.use('/logout', require(path.join(__dirname,'../routes/logout/logout')));
router
    .route('/')
    .get(function (req, res) {
        res.redirect('urlshortner/analytics')
    })
module.exports = router;
