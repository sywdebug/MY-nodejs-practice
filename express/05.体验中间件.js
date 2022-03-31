const express = require("express");
const app = express();

app.use(function (req, res, next) {
  const time = Date.now();
  req.startTime = time;
  next();
});

app.get("/", (req, res) => {
  res.send("home page" + req.startTime);
});
app.get("/user", (req, res) => {
  res.send("user page" + req.startTime);
});

app.listen(80, () => {
  console.log("127.0.0.1");
});
