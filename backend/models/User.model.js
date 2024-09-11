import mongoose from "mongoose";
import validator from "validator"
const Schema =new mongoose.Schema({
   name:{
    type:String,
    required:true,
    unique:true
   },
   email:{
    type:String,
    required:true,
    unique:true,
    validator:[validator.isEmail,"Please enter a valid email"],
   },
   password:{
    type:String,
    required:true,
    required: [true, "Please Enter Your Password"],
      minLength: [8, "Password should be greater than 8 characters"],
    
   }
})

const UserDB = mongoose.model("users",Schema)


export default UserDB;