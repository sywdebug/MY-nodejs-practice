const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
const expressJWT = require("express-jwt");

const cors = require("cors");

app.use(cors());

app.use(express.urlencoded({ extended: false }));

//指定密钥
const secretKey = "sywdebugnb666";

//配置成功就可以把解析的用户信息挂载到req.user中
app.use(expressJWT({ secret: secretKey, algorithms: ["HS256"] }).unless({ path: [/\/api\//] }));

//登陆接口
app.post("/api/login", (req, res) => {
  let userInfo = req.body;
  if (userInfo.username != "admin" && userInfo.password != "123456") {
    return res.send({ status: 0, msg: "登录失败" });
  }
  //生成token
  let token = jwt.sign({ username: userInfo.username }, secretKey, { expiresIn: "30s" });
  res.send({
    status: 1,
    token,
    msg: "登录成功",
  });
});

app.get("/admin/getinfo", (req, res) => {
  res.send({
    status: 1,
    data: req.user,
    msg: "获取信息成功",
  });
});

app.use((err, req, res, next) => {
  if (err.name == "UnauthorizedError") {
    return res.send({
      code: 1000,
      msg: "无效的token",
    });
  }
  res.send({
    code: 1000,
    msg: "未知错误",
  });
});

app.listen(80, () => {
  console.log("127.0.0.1");
});
