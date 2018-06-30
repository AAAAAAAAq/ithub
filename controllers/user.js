const db = require('./db_helper');

// 1 展示登陆页面
// 2 处理登陆逻辑
// 3 展示注册页面
// 4 处理注册页面
// 5 退出
exports.showSignin = (req,res) =>{
  // res.send('showSignin')
  res.render('signin.html');
}
exports.handleSignin = (req,res) =>{
  res.send('handleSignin')
}
exports.showSignup = (req,res) =>{
  res.render('signup.html')
}
exports.handleSignup = (req,res) =>{
  res.send('handleSignup')
}
exports.handleSignout = (req,res) =>{
  res.send('handleSignout')
}