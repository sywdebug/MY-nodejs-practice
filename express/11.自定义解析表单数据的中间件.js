const express = require("express");
const app = express();

const qs = require("querystring");

app.use((req, res, next) => {
  let str = "";
  req.on("data", (chunk) => {
    //监听data变化，拼接data数据到str
    console.log(chunk);
    str += chunk;
  });

  req.on("end", () => {
    //监听到结束，打印完整的请求数据
    // console.log(str);
    let body = qs.parse(str);
    // console.log(body);
    req.body = body;
    next();
  });
});

app.post("/user", (req, res) => {
  res.send(req.body);
});

app.listen(80, () => {
  console.log("127.0.0.1");
});
