const fs = require("fs");
/**
 * 读readme.md文件
 */
function readFile() {
  fs.readFile("./readme.md", "utf8", (err, data) => {
    if (err) {
      return console.log("读取文件失败", err.message);
    }
    console.log("读取文件成功", data);
  });
}
/**
 * 写readme.md文件
 */
function writeFile() {
  fs.writeFile("./readme.md", "66666", (err) => {
    if (err) {
      console.log("写入文件失败", err);
    }
    console.log("写入文件成功");
  });
}
// readFile();
// setTimeout(() => {
//   writeFile();
// }, 500);
// setTimeout(() => {
//   readFile();
// }, 1000);

/**
 * 从1.txt读然后处理然后写到2.txt
 */
function lianxi() {
  fs.readFile("./1.txt", "utf8", (err, data) => {
    if (err) {
      return console.log("读取失败", err);
    }
    console.log("读取成功", data);
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      const e = data[i];
      arr.push({ i: i, v: e });
    }
    let str = JSON.stringify(arr);
    str = str.replace("[", "");
    str = str.replace("]", "");
    str = str.replace(/{/g, "");
    str = str.replace(/},/g, "\r\n");
    str = str.replace(/}/g, "\r\n");
    console.log(str);
    setTimeout(() => {
      fs.writeFile("./2.txt", str, (err) => {
        if (err) {
          return console.log("写入文件失败", err);
        }
        console.log("写入文件成功");
      });
    }, 1000);
  });
}
lianxi();

