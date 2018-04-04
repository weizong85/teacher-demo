const express = require('express');

const app = express();
const api = require('./api/api');

// Middlewares setup
require('./middlewares/middlewares')(app);

// Routes
app.use('/api', api);

app.use((req, res) => {
  return res.status(500).send({ error: 'Something went wrong.' });
});

module.exports = app;
