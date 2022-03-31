const qs = require("querystring");

const bodyParser = (req, res, next) => {
  let str = "";
  req.on("data", (chunk) => {
    //监听data变化，拼接data数据到str
    // console.log(chunk);
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
};

module.exports = {
  bodyParser,
};
