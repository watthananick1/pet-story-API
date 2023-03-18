const functions = require('firebase-functions');
const app = require('./path/to/your/express/app');
exports.api = functions.https.onRequest(app);
const express = require('express');
const app = express();

const firebase = require("firebase/app");
require("firebase/firestore");

// Initialize Firebase
firebase.initializeApp({
  apiKey: "https://console.firebase.google.com/u/0/project/petstory-fe5a4/settings/general/web:OWE2NDVmYTctYTRjYi00YWVlLTk1ZDktNjk2NjRkNDRiYTU1?hl=th",
  authDomain: "<YOUR_AUTH_DOMAIN>",
  projectId: "<YOUR_PROJECT_ID>",
});

// Get a Firestore instance
const db = firebase.firestore();

// Use the Firestore instance to read or write data
db.collection("users")
  .doc("user1")
  .set({
    name: "John Doe",
    email: "johndoe@example.com",
  })
  .then(() => {
    console.log("Document successfully written!");
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });


// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/users', (req, res) => {
  // Logic for fetching users
});

module.exports = app;
