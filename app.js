//app.js 程序的入口
//功能 
const express = require('express');
const app = express();
// 监听端口
const PORT = 3000;
app.listen(PORT,()=>{
  console.log('监听' + PORT);
})
app.get('/',(req,res)=>{
  res.send('hello')
})