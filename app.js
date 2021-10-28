const { db } = require('./db');
const express = require('express');
const morgan = require('morgan');
const api = require('./api');
const app = express();
app.use(morgan('dev'));
app.use('/api', api);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Listening on port 3000');
  db.sync({ force: false });
});
