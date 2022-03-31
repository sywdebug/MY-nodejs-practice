const express = require("express");
const app = express();

app.use("/test2", express.static("./test2"));
app.use(express.static("./test1"));

app.listen(80, () => {
  console.log("express server running at http://127.0.0.1");
});
