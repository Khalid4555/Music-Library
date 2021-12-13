const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('we are go go go');
});

module.exports = app;
