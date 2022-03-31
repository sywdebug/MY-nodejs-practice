const express = require("express");
const app = express();

//导入路由模块
const router = require("./03.router");

//注册路由模块
//增加访问前缀
app.use("/api", router);

//启动服务器
app.listen(80, () => {
  console.log("express server running at http://127.0.0.1");
});
