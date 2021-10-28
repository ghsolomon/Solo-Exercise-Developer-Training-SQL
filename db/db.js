const { Sequelize } = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/books', { logging: false });
const connect = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established succesfully');
  } catch (error) {
    console.error('Error connecting to DB', error);
  }
};
connect();
module.exports = db;
