const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "transfer_tracker_db",
  "root",
  "204HarperBlitz",
  { dialect: "mysql", host: "localhost" }
);

module.exports = sequelize;