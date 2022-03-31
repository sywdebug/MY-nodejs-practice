const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/jsonp", (req, res) => {
  const funcName = req.query.callback;
  const data = { name: "sywdebug", age: 22 };
  const scriptStr = `${funcName}(${JSON.stringify(data)})`;
  res.send(scriptStr);
});

const cors = require("cors");
app.use(cors());

const router = require("./13.apiRouter");
app.use("/api", router);

app.listen(80, () => {
  console.log("127.0.0.1");
});
