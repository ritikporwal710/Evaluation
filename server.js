const express = require('express');
const mongoose = require("mongoose");
const Course = require('./models/courseModel');
const app = express()


// middlwares
app.use(express.json())
// routes

app.get('/', (req,res)=>{
    res.send('Welcome to the Student course management');
})

app.get('/courses', async(req,res)=>{
    try {
        const courses = await Course.find({})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message}) 
    }

})

app.post('/courses', async(req,res)=>{
    try {
        const course = await Course.create(req.body)
        res.status(200).json(course);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message}) 
        
    }
})



app.listen(3000, ()=>{
    console.log(`Node Api is running on port 3000`); 
})


mongoose.
connect('mongodb+srv://porwal8840:porwal8840@cluster0.vnnpzhl.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("connected to mongoDB")
}).catch((error)=>{
    console.log(error)
})