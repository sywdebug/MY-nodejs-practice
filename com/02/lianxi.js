const fs = require("fs");
const path = require("path");
const http = require("http");
let server = http.createServer();

server.on("request", (req, res) => {
  let url = req.url;
  let filePath = "";
  if (url == "/") {
    filePath = path.join(__dirname, "/index.html");
  } else {
    filePath = path.join(__dirname, url);
  }
  let type = path.extname(filePath).slice(1);
  res.setHeader("Content-Type", "text/" + type + "; charset=utf-8");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.end("404 Not Found");
    res.end(data);
  });
});
server.listen(8001, () => {
  console.log("server running at http://127.0.0.1:8001");
}); 
