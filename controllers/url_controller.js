let user=require('../models/schema');
let {nanoid}=require('nanoid');
let handleposturl=async (req,res)=>{
    let longUrl=req.body.url;
    if(longUrl){
        let newdata=await user.findOne({longUrl:longUrl});
        if(newdata){
            res.status(200).render('urlshortner',{shortUrl:newdata.shortUrl,url:req.protocol+"://"+req.headers.host});
        }else {
            let data = await user.create({
                shortUrl: nanoid(8),
                longUrl: longUrl,
                timestamp: [new Date()],
                userId: req.user._id
            });
            res.status(200).render('urlshortner', {shortUrl: data.shortUrl,url:req.protocol+"://"+req.headers.host});
        }
    }else{
        res.status(400).json({message:"invalid url"});
    }
}
let handlegetredirect=async (req,res)=>{
        let shorturl=req.query.shorturl;
        let data=await user.findOne({shortUrl:shorturl,userId:req.user._id});
        if(data){
            data.timestamp.push(new Date());
            await user.updateOne({shortUrl:shorturl},data);
            res.redirect(data.longUrl);
        }else{
            res.status(400).json({message:"invalid url"});
        }
}
let handlegetanalytics=async (req,res)=> {
    let data = await user.find({userId: req.user._id});
    let newdata = data.map((item) => {
        return {
            shortUrl: item.shortUrl,
            originalUrl: item.longUrl,
            clicks: item.timestamp.length
        }
    })
        res.status(200).render('index', {
            data: newdata,
            url: req.protocol + "://" + req.headers.host,
            message: "",
            islogin: true
        });
}
let handledelete=async (req,res)=>{
        await user.deleteOne({shortUrl:req.query.shorturl,userId:req.user._id});
        res.redirect('/urlshortner/analytics');
}
let handlegetadminanalytics=async (req,res)=>{
    let data=await user.find({});
    let newdata=data.map((item)=>{
        return {
            shortUrl:item.shortUrl,
            originalUrl:item.longUrl,
            clicks:item.timestamp.length
        }
    })
    res.status(200).render('index',{data: newdata,url:req.protocol+"://"+req.headers.host,message:"",islogin:true});
}
module.exports={handleposturl,handlegetredirect,handlegetanalytics,handledelete,handlegetadminanalytics};