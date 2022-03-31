const express = require("express");
const router = express.Router();


router.get("/get", (req, res) => {
  const query = req.query;
  res.send({
    status: 0,
    data: query,
    msg: "GET请求成功",
  });
});

router.post("/post", (req, res) => {
  const body = req.body;
  res.send({
    status: 0,
    data: body,
    msg: "POST请求成功",
  });
});

module.exports = router;
