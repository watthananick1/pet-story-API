import express from 'express';
import admin from 'firebase-admin';
import { initializeApp } from 'firebase/app';
import serviceAccount from './pet-story-f51e3-firebase-adminsdk-wsths-b452f92272.json' assert { type: "json" };


const app = express();

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pet-story-f51e3-default-rtdb.asia-southeast1.firebasedatabase.app'
});

const db = admin.firestore();

// Define your routes here
app.get('/users', async (req, res) => {
  try {
    const usersRef = db.collection('Users');
    const snapshot = await usersRef.get();
    const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(`An error occurred while retrieving users: ${error.message}`);
  }
});

app.post('/users', async (req, res) => {
    try {
      const { firstName, age, email } = req.body;
      console.log(data);
    //   const userRef = db.collection('Users').doc();
    //   const newUser = {
    //     id: userRef.id,
    //     firstName = ,
    //     lastName,
    //     password
    //   };
    //   await userRef.set(newUser);
    //   res.status(201).send(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occurred while creating the user: ${error.message}`);
    }
  });
  

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
