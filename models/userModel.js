const { name } = require("ejs");
const { model } = require("mongoose");

const mongoose = request('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true , 
        unique : true
    }
})
const User = mongoose.model('user',userSchema)

module.exports = User;