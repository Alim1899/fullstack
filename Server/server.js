const express = require("express");
const app = express();
app.get("/names",(req,res)=>{
  res.send("Alim");
})

app.listen(5000,()=>{
  console.log('Server is running on port:5000');
})