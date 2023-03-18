const express = require('express');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`
});

const db = admin.firestore();

// Create a new Express app
const app = express();

// Define a route that retrieves all users from the "Users" collection
app.get('/users', async (req, res) => {
  try {
    const usersRef = db.collection('Users');
    const snapshot = await usersRef.get();
    const users = snapshot.docs.map(doc => doc.data());
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving users from the database.');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
