const functions = require('firebase-functions');
const app = require('./path/to/your/express/app');
exports.api = functions.https.onRequest(app);
const express = require('express');
const app = express();



// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/users', (req, res) => {
  // Logic for fetching users
});

module.exports = app;
