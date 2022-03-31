const express = require("express");
const app = express();

// const mw = function (req, ers, next) {
//   console.log("这是最简单的中间件函数");
//   next();
// };

// //将mw注册为全局生效的中间件
// app.use(mw);

app.use(function (req, ers, next) {
  console.log("这是最简单的中间件函数");
  next();
});

app.get("/", (req, res) => {
  console.log("调用了 / 这个路由");
  res.send("home page");
});
app.get("/user", (req, res) => {
  console.log("调用了 /user 这个路由");
  res.send("user page");
});

app.listen(80, () => {
  console.log("127.0.0.1");
});
