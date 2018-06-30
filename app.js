//app.js 程序的入口
//功能 负责：配置，监听端口
const express = require('express');
const router = require('./routes/router');
const app = express();
// 监听端口
const PORT = 3000;

app.listen(PORT,()=>{
  console.log('监听' + PORT);
})

// 注册路由
app.use(router);