const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        trim: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    course:{
        type: String,
        required: true,
        unique: true
    },
    
},
{timestamps: true}); 

const User = mongoose.model('User',userSchema); 

module.exports = User;
