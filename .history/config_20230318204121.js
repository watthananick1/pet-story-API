import express from 'express';
import admin from 'firebase-admin';
import serviceAccount from './pet-story-f51e3-firebase-adminsdk-wsths-b452f92272.json' assert { type: "json" };


const app = express();
app.use(express.json())
// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pet-story-f51e3-default-rtdb.asia-southeast1.firebasedatabase.app'
});

const db = admin.firestore();

module.exports = {app}
