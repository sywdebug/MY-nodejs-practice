const TIME = require("./formatDate");
const dt = new Date();
console.log(dt);
console.log(TIME.dateFormat(dt));

const moment = require("moment");

let dt1 = moment(new Date("2022/2/2")).format("YYYY-MM-DD HH:mm:ss");
console.log(dt1);
