const express = require('express')
const app = express()


// routes

app.get('/', (req,res)=>{
    res.send('Hello to the home');
})


app.listen(3000, ()=>{
    console.log(`Node Api is running on port 3000`);
})