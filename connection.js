let mongoose=require('mongoose');
let con=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/urlshortener')
    .then(()=>{
        console.log("connection successfull");
    }).catch((err)=>{
        console.log(err);
    })
}
module.exports=con;