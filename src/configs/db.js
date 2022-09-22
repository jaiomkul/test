const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(process.env.MDB);
};

module.exports = connect;
