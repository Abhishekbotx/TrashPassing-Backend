const mongoose=require("mongoose");

const messageSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
    },
   

});

module.exports=mongoose.model('Message',messageSchema)