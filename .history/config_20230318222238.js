import admin from "firebase-admin";
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:
      "https://pet-story-f51e3-default-rtdb.asia-southeast1.firebasedatabase.app",
  });