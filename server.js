const express = require('express');
const app = express();
const PORT = process.env.PORT || 8800;


app.get('/hello',(req,res)=>{
  res.send("i am back ")
})
app.listen(PORT,console.log(`listen on ${PORT}`));
