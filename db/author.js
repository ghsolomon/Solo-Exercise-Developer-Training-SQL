const { DataTypes } = require('sequelize');
const db = require('./db');
const Author = db.define('Author', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
module.exports = Author;
