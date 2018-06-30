//app.js 程序的入口
//功能 负责：配置，监听端口
const express = require('express');
// 导入处理模板的模块
const expressArtTemplate = require('express-art-template');
const bodyParser = require('body-parser');
// 导入路由模块
const router = require('./routes/router');
const app = express();
// 监听端口
const PORT = 3000;

app.listen(PORT,()=>{
  console.log('监听' + PORT);
})
// 处理静态资源
app.use('/public',express.static('./public'))
app.use('/node_modules', express.static('./node_modules'));
// 配置模板引擎
app.engine('html',expressArtTemplate)
app.use(bodyParser.urlencoded({ extended: false }));
// 注册路由
app.use(router);