const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function() {
  const db = config.get("db");
  winston.info(`The db connection string: ${db}`);
  mongoose.connect(db).then(() => winston.info(`Connected to ${db}...`));
};
