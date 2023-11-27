// NOTE - MongoDB connection, mongoose instantiation
const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb+srv://root:mongodb115@cluster0.9h9ocqu.mongodb.net/';

connect(connectionString);

//NOTE - export connection to be used in our server.js
module.exports = connection;