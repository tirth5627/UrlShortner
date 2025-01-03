let path=require('path')
let con=require(path.join(__dirname,'/connection'));
let checkloginauth=require(path.join(__dirname,'/middlewares/authlogin'));
let adminauth=require(path.join(__dirname,'/middlewares/adminauth'));
let cookieParser=require('cookie-parser');
con();
let express=require('express');
let app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.enable('trust proxy');
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use('/urlshortner',checkloginauth);
app.use('/urlshortner/admin_analytics',adminauth);
app.use(express.static(path.join(__dirname,'/views/style')));
// app.use(express.static(path.join(__dirname,'/public')));
// app.use(express.static(path.join(__dirname,'/public/stylesheets')));
// app
//     .get('/',function (req, res) {
//
//         // res.render('index.html');
//     })
app.use('/',require(path.join(__dirname,'/routes/index')));
app.listen(3000,()=>console.log("server started on port 3000"));