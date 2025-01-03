let mongoose=require('mongoose')
let schema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        role:{
            type:String,
            default:"user"
        }
    },
    {
        timestamps:true
    }
)
module.exports=mongoose.model('user',schema)