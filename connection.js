let mongoose=require('mongoose');
let con=()=>{
    mongoose.connect('mongodb+srv://pateltirth27122005:YNMmgjg2mxbieFwe@urlshortner.o1azj.mongodb.net/?retryWrites=true&w=majority&appName=urlshortner')
    .then(()=>{
        console.log("connection successfull");
    }).catch((err)=>{
        console.log(err);
    })
}
module.exports=con;