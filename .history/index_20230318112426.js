import express from 'express';
import admin from 'firebase-admin';

// Initialize Firebase Admin SDK
admin.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
});

const db = admin.firestore();
const app = express();

// Define your routes here
https://chat.openai.com/chat

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
