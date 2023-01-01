const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send( "<h2>hello<h2>");

})
app.get("/html",(req,res)=>{
    res.sendFile("/index.html",{root:__dirname});

})
app.listen(3000,(err,res)=>{
    if(res){
        console.log("serbver connect"+res)
    }else{
        console.log("error"+err)
    }
})