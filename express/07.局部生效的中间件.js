const express = require("express");
const app = express();

const mw1 = (req, res, next) => {
  console.log("调用了第一个局部生效的中间件");
  next();
};
const mw2 = (req, res, next) => {
  console.log("调用了第二个局部生效的中间件");
  next();
};

app.get("/", mw1, mw2, (req, res) => {
  res.send("home page");
});
app.get("/qq", [mw1, mw2], (req, res) => {
  res.send("home page");
});
app.get("/user", (req, res) => {
  res.send("home page");
});

app.listen(80, () => {
  console.log("127.0.0.1");
});
