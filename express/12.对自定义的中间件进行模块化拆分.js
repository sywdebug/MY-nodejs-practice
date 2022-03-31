const express = require("express");
const app = express();

const costomBodyParser = require("./12.custom-body-parser");

app.use(costomBodyParser.bodyParser);

app.post("/user", (req, res) => {
  res.send(req.body);
});

app.listen(80, () => {
  console.log("127.0.0.1");
});
