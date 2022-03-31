const express = require("express");
const app = express();

const session = require("express-session");
app.use(
  session({
    secret: "sywdebug",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.post("/api/login", (req, res) => {
  if (req.body.username != "admin" && req.body.password != "123456") {
    return res.send({ status: 0, msg: "登录失败" });
  }
  req.session.user = req.body;
  req.session.islogin = true;
  res.send({ status: 1, msg: "登录成功" });
});

app.get("/api/username", (req, res) => {
  if (!req.session.islogin) {
    res.send({ status: 0, msg: "未登录" });
  }
  res.send({
    status: 1,
    data: req.session.user.username,
    msg: "获取成功",
  });
});

app.post("/api/logout", (req, res) => {
  req.session.destroy();
  res.send({
    status: 1,
    msg: "退出登录成功",
  });
});
