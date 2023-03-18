const express = require('express');
import  firebase-admin");
const serviceAccount = require("./pet-story-f51e3-firebase-adminsdk-wsths-b452f92272.json");

const app = express();
// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://pet-story-f51e3-default-rtdb.asia-southeast1.firebasedatabase.app",
});

module.exports = {
    app
};
