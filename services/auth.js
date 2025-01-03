let secretkey="Tp27@123";
let jwt=require('jsonwebtoken');
let setuser=(user)=>{
    return jwt.sign({
        _id:user._id,
        email:user.email,
        password:user.password,
        role:user.role
    },secretkey);
}
let getuser=(token)=>{
    let user;
    try{
        user=jwt.verify(token,secretkey);
    }catch(err){
        console.log(err);
    }finally {
        return user;
    }
}
module.exports={setuser,getuser}