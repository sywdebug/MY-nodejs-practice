const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cors = require("cors");
app.use(cors());

const router = require("./13.apiRouter");
app.use("/api", router);

app.listen(80, () => {
  console.log("127.0.0.1");
});
