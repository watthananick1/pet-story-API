const express = require('express');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      
});

const db = admin.firestore();
