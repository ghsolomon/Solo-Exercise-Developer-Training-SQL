const { DataTypes } = require('sequelize');
const db = require('./db');
const Book = db.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edition: {
    type: DataTypes.ENUM('digital', 'audio', 'paperback', 'hardcover'),
    allowNull: false,
  },
  isbn13: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
  language: {
    type: DataTypes.STRING,
  },
  publicationDate: {
    type: DataTypes.DATE,
  },
});
module.exports = Book;
