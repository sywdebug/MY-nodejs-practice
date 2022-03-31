const http = require("http");
let server = http.createServer();
server.on("request", (req, res) => {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  let str = `你的请求url为${req.url}，请求方法为${req.method}`;
  console.log(str);
  let url = req.url;
  let content = "<h1>404 Not Found!</h1>";
  if (url == "/" || url == "/home") {
    res.end("<h1>首页</h1>");
  } else if (url == "/about") {
    res.end("<h1>关于</h1>");
  } else {
    res.end(content);
    // res.end({ name: "sywdebug", age: 20 });
  }
  // res.end(str);
});
server.listen(8000, () => {
  console.log("server running at http://127.0.0.1:8000");
});
