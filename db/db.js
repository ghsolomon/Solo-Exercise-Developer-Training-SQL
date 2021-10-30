const { Sequelize } = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/books', { logging: false });
const connect = async () => {
  try {
    await db.authenticate();
  } catch (error) {
    console.error('Error connecting to DB', error);
  }
};
connect();
module.exports = db;
