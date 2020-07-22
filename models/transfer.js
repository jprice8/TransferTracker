const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Transfer = sequelize.define('transfer', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false
  },
  facility: {
    type: Sequelize.STRING,
    allowNull: false
  },
  requester: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imms: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  reqQty: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  uom: {
    type: Sequelize.STRING,
    allowNull: false
  },
  filledBy: Sequelize.STRING,
  shipQty: Sequelize.INTEGER,
  trackingNum: Sequelize.STRING
});

module.exports = Transfer;