const express = require("express");
const app = express();

const parser = require("body-parser");
app.use(parser.urlencoded({ extended: false }));

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("OK");
});

app.listen(80, () => {
  console.log("127.0.0.1");
});
