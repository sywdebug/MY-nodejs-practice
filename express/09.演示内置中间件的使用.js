const express = require("express");
const app = express();
//配置express.json中间件，解析json格式数据
app.use(express.json());
//配置express.urlencoded中间件，解析x-www-form-urlencoded格式数据
app.use(express.urlencoded({ extended: false }));

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("OK");
});

app.post("/book", (req, res) => {
  console.log(req.body);
  res.send("OK");
});

app.listen(80, () => {
  console.log("127.0.0.1");
});
