const fs = require("fs");
function readFile1() {
  // __dirname + "./readme.md"会存在问题，所以使用path.join
  fs.readFile(__dirname + "/readme.md", "utf8", (err, data) => {
    if (err) {
      return console.log("读取文件失败", err.message);
    }
    console.log("读取文件成功", data);
  });
}

const path = require("path");
// path.join
function readFile2() {
  fs.readFile(path.join(__dirname, "/readme.md"), "utf8", (err, data) => {
    if (err) {
      return console.log("读取文件失败", err.message);
    }
    console.log("读取文件成功", data);
  });
}
readFile2();
let filePath = path.join(__dirname, "/readme.md");
let fullName = path.basename(filePath); //拿到文件名
console.log(fullName);
fullName = path.basename(filePath, ".md"); //拿到文件名去除后缀
console.log(fullName);
fullName = path.extname(filePath); //拿到文件后缀
console.log(fullName);
