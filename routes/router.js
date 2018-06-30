// route 路由规则
// router 路由对象
// router.js 职责：设置路由
const express = require('express');
const indexCtrl = require('../controllers/index');
const topicCtrl = require('../controllers/topic');
const categoryCtrl = require('../controllers/category');
const userCtrl = require('../controllers/user');
// 创建路由对象
const router = express.Router();
// 导出模块
module.exports = router;
// 设置路由规则
//1 index.js 不需要登陆展示的功能 
router.get('/',indexCtrl.showIndex);
// 2. user.js 登陆、退出、注册
router
  .get('/signin', userCtrl.showSignin)
  .post('/signin', userCtrl.handleSignin)
  .get('/signup', userCtrl.showSignup)
  .post('/signup', userCtrl.handleSignup)
  .get('/signout', userCtrl.handleSignout)