import express from 'express';
import admin from 'firebase-admin';
import { initializeApp } from "firebase/app";

var serviceAccount = require'./pet-story-f51e3-firebase-adminsdk-wsths-b452f92272.json';

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pet-story-f51e3-default-rtdb.asia-southeast1.firebasedatabase.app"
  });

const db = admin.firestore();
const app = express();

// Define your routes here
app.get('/users', async (req, res) => {
    try {
      const usersRef = db.collection('Users');
      const snapshot = await usersRef.get();
      const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.status(200).send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send(`An error occurred while retrieving users: ${error.message}`);
      }
      
  });

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
