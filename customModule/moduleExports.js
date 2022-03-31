let username = "张三";
function sayHello() {
  console.log("大家好，我是" + username);
}
module.exports = {
  username,
  sayHello,
};

module.exports = {
  username: "李四",
  sayHi() {
    console.log("Hi");
  },
};
