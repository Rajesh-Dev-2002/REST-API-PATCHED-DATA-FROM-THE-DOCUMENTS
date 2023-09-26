const mongoose = require("mongoose");

// also require validator;
const validator = require("validator");

//creating the student schema for validation

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email is already Used"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email ID");
            }
        }
    },
    phoneno:{
        type:Number,
        required:true,
        unique:true,
        min:10,
    },
    address:{
        type:String,
        required:true
    }
})

// We wll now create a new collection as well 
const Student = new mongoose.model('Student',studentSchema)
module.exports=Student;
