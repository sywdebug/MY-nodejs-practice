const express = require("express");
//创建路由对象
const router = express.Router();

//挂载具体的路由
router.get("/user/list", (req, res) => {
  res.send("get user list");
});
router.post("/user/add", (req, res) => {
  res.send("add new user");
});

//导出路由对象
module.exports = router;
