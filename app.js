const express = require('express');
require('dotenv').config();
const app = express();

app.get("/",async(req,res)=>{
       try {
               res.send('congratulation your app is working')
       } catch (error) {
              res.send(error);
       }
})
app.get("/hello",async(req,res)=>{
           res.send("Hello");
})

app.listen(process.env.PORT,()=>{
         console.log(`server is running on PORT ${process.env.PORT}`)
})