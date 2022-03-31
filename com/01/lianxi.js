const fs = require("fs");
const path = require("path");

let styleReg = /<style>[\s\S]*<\/style>/;
let scriptReg = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname, "/index.html"), "utf8", (err, data) => {
  if (err) return console.log("读取文件失败", err);
  resolveCSS(data);
  resolveJS(data);
  resolveHTML(data);
});
function resolveCSS(data) {
  let RegExpExecArray = styleReg.exec(data);
  let cssStr = RegExpExecArray[0].replace("<style>", "").replace("</style>", "");
  fs.writeFile(path.join(__dirname, "/index.css"), cssStr, (err) => {
    if (err) return console.log("写文件失败", err);
    console.log("写css文件成功");
  });
}
function resolveJS(data) {
  let RegExpExecArray = scriptReg.exec(data);
  let jsStr = RegExpExecArray[0].replace("<script>", "").replace("</script>", "");
  fs.writeFile(path.join(__dirname, "/index.js"), jsStr, (err) => {
    if (err) return console.log("写文件失败", err);
    console.log("写js文件成功");
  });
}
function resolveHTML(data) {
  let htmlStr = data.replace(styleReg, "<link rel='stylesheet' href='./index.css'/>").replace(scriptReg, "<script src='./index.js'></script>");
  fs.writeFile(path.join(__dirname, "/index.html"), htmlStr, (err) => {
    if (err) return console.log("写文件失败", err);
    console.log("写html文件成功");
  });
}
