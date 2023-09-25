let express=require("express");
let app= express();
let mongoose = require("mongoose");
let port=5000;
app.use(express.json());
 mongoose.connect("mongodb+srv://vinoth:vinoth12345@cluster0.9yg5ymb.mongodb.net/",{
    useNewUrlParser:true
 })
 mongoose.connection.on("err",()=>{
    console.log(`conncetion failed`);
 })
 mongoose.connection.once("open",()=>{
    console.log(`connected  successfully`);
 });

 let route= require("../Queries/router")
app.use("/",route)
 app.listen(port,()=>{
    console.log(`server running on port  ${port}`);
 })