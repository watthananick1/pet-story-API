import express from 'express';
import admin from 'firebase-admin';


// Initialize Firebase Admin SDK
admin.initializeApp({
    https://console.firebase.google.com/u/0/project/pet-story-f51e3/settings/general/web:OGI4ZmZhMzEtNDYzOC00NTA4LWI4OTQtNTM4ODYzYmE4NzNk?hl=th
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
