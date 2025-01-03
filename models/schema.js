let mongoose=require('mongoose');

let schema=new mongoose.Schema({
    shortUrl:{type:String,required:true},
    longUrl:{type:String,required:true},
    timestamp:[{
        type:Date
    }],
    userId:{type:mongoose.Schema.Types.ObjectId,
        ref:"users"}
},{
        timestamps:true
    })
module.exports=mongoose.model('urlshortner',schema);