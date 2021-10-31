const { DataTypes } = require('sequelize');
const db = require('./db');
const Book = require('./book');
const Author = db.define('Author', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
Author.findByName = async (name) => {
  const foundAuthor = await Author.findOne({
    where: {
      name,
    },
    attributes: {
      name,
    },
    include: {
      model: Book,
      attributes: ['title'],
      through: { attributes: [] },
    },
  });
  return foundAuthor;
};
module.exports = Author;
