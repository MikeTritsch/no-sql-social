// NOTE - Imports
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// NOTE - Port connection + Express instantiation
const PORT = process.env.PORT || 3001;
const app = express();

// NOTE - Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// NOTE - Let's go!
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for NoSQLSocial running on ${PORT}!`);
  });
});