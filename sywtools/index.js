const greet = require("./greet");
const farewell = require("./farewell");
module.exports = {
  ...greet,
  ...farewell,
};
