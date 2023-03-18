const functions = require('firebase-functions');
const express = require('express');

const firebase = require('firebase/app');
require('firebase/firestore');

// Initialize Firebase
firebase.initializeApp({
  apiKey: '<YOUR_API_KEY>',
  authDomain: '<YOUR_AUTH_DOMAIN>',
  projectId: '<YOUR_PROJECT_ID>'
});

// Get a Firestore instance
const db = firebase.firestore();

// Define the Express app
const app = express();

// Define an HTTP endpoint
app.get('/api/users', (req, res) => {
  // Use the Firestore instance to read or write data
  db.collection('users').doc('user1').set({
    name: 'John Doe',
    email: 'johndoe@example.com'
  })
  .then(() => {
    res.send('User created!');
  })
  .catch((error) => {
    console.error('Error writing document: ', error);
    res.status(500).send('Error creating user!');
  });
});

// Export the HTTP endpoint as a Cloud Function
exports.api = functions.https.onRequest(app);
