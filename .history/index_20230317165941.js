const functions = require('firebase-functions');
const app = require('./path/to/your/express/app');
exports.api = functions.https.onRequest(app);
const express = require('express');
const app = express();

const firebase = require("firebase/app");
require("firebase/firestore");

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBSbneHsDzttyZppFYaBtSNNK2bZgvgU_w",
  authDomain: "petstory-fe5a4.firebaseapp.com",
  projectId: "petstory-fe5a4",
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
