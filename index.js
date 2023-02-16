const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

//ConnectDB();
// app.get("/", (req, res) => {
//     res.status(200).json({ message: "get data" });
// })


app.get("/",(req,res)=>{
    res.status(200).json({name:"aslam"})
    
})
app.get("/getdata",(req,res)=>{
      res.status(200).json({name:"akram"})
    
})
app.listen(port, () => {
    console.log(`app server started on port ${port}`)
})
