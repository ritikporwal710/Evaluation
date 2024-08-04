const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    id:{
        type: String,
        required: true,
        trim: true
    },
    title:{
        type: String,
        required: true,
        unique: true
    },
    category:{
        type: String,
        required: true,
    },
    difficulty:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
},
{timestamps: true}); 

const Course = mongoose.model('Course',courseSchema); 

module.exports = Course;