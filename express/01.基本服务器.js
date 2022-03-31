const express = require("express");
//创建web服务器
const app = express();

//监听请求，并响应
app.get("/user", (req, res) => {
  console.log(req.query);
  res.send({ name: "sywdebug", age: 20, gender: "男" });
});
app.post("/user", (req, res) => {
  console.log(req.query);
  res.send("post请求成功");
});

//获取参数
app.get("/", (req, res) => {
  console.log(req.query);
  let name = req.query.name;
  res.send({ name, age: 20, gender: "男" });
});

//: 动态参数
app.get("/user/:name/:age", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

//启动服务器
app.listen(80, () => {
  console.log("express server running at http://127.0.0.1");
});
