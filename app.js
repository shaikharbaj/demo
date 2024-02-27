const express = require('express');
const jwt = require("jsonwebtoken")
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

app.get("/register",async(req,res)=>{
          const token = await jwt.sign({name:'arbaj'},process.env.JWT_SECRET,{
               expiresIn:'1h'
          })
         return res.json({
              success:true,
              token
          })
})          
app.get("/login/:id",async(req,res)=>{
     try {
        const token = req.params.id;
     const decoded = jwt.verify(token, process.env.JWT_SECRET);
     if(decoded){
          return res.json({decoded});
     }
     } catch (error) {
          res.send(error);
     }
     
})

app.listen(process.env.PORT,()=>{
         console.log(`server is running on PORT ${process.env.PORT}`)
})