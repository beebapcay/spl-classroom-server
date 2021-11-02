const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

const Class = sequelize.define('class', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  section: Sequelize.STRING(45),
  subject: Sequelize.STRING(45),
  room: Sequelize.STRING(45),
  background: Sequelize.STRING(100),
});

module.exports = Class;
