const mysql = require("mysql");
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  port: "3306",
  password: "123456",
  database: "nodetest",
});
db.query("select 1", (err, results) => {
  if (err) return console.log(err.message);
  console.log(results);
});

//查询user表数据
db.query("select * from user", (err, results) => {
  if (err) return console.log(err.message);
  //使用select查询结果为数组
  console.log(results);
});

let user;
let sqlStr;
//插入数据
// user = { name: "司", age: 11 };
// sqlStr = "insert into user (name,age) values (?,?)";
// db.query(sqlStr, [user.name, user.age], (err, result) => {
//   if (err) return console.log(err.message);
//   if (result.affectedRows > 0) {
//     console.log("数据插入成功");
//   } else {
//     console.log("数据插入失败");
//   }
// });

//插入数据便捷方式
// user = { name: "司", age: 111 };
// sqlStr = "insert into user set ?";
// db.query(sqlStr, user, (err, result) => {
//   if (err) return console.log(err.message);
//   if (result.affectedRows > 0) {
//     console.log("数据插入成功");
//   } else {
//     console.log("数据插入失败");
//   }
// });

//更新数据
// user = { name: "更新名字", age: 111 };
// sqlStr = "update user set name=?,age=? where id=?";
// db.query(sqlStr, [user.name, user.age, 6], (err, result) => {
//   if (err) return console.log(err.message);
//   if (result.affectedRows > 0) {
//     console.log("修改成功");
//   } else {
//     console.log("修改失败");
//   }
// });

//更新数据便捷方式
// user = { name: "便捷更新名字", age: 111 };
// sqlStr = "update user set ? where id=?";
// db.query(sqlStr, [user, 7], (err, result) => {
//   if (err) return console.log(err.message);
//   if (result.affectedRows > 0) {
//     console.log("修改成功");
//   } else {
//     console.log("修改失败");
//   }
// });

//删除数据
db.query("delete from user where id=?", 8, (err, result) => {
  if (err) return console.log(err.message);
  if (result.affectedRows > 0) {
    console.log("删除成功");
  } else {
    console.log("删除失败");
  }
});
