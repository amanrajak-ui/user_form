import mongoose from "mongoose";

const userSchema = new mongoose.Schema({                 // creating colums         ye hai model 
    name:{type:String , required:true},
    email:{type:String ,required:true},
    age:{type:Number },
    phone:{type:Number},
    password:{type:String, required:true},
    CreatedAt:{
        type:Date,
        default:Date.now
    }

})

export const User = mongoose.model('user',userSchema);