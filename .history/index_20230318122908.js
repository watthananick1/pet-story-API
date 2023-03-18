import express from 'express';
import admin from 'firebase-admin';
import { initializeApp } from 'firebase/app';
import serviceAccount from './pet-story-f51e3-firebase-adminsdk-wsths-b452f92272.json' assert { type: "json" };


const app = express();
app.use(express.json())
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
      const data = req.body;
      console.log(data);
      const userRef = db.collection('Users').doc();
      const newUser = {
        id: userRef.id,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password
    };
      await userRef.set(newUser);
      res.status(201).send(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occurred while creating the user: ${error.message}`);
    }
  });
  
  app.delete('/users/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const userRef = db.collection('Users').doc(userId);
      const user = await userRef.get();
  
      if (!user.exists) {
        res.status(404).send(`User with ID ${userId} not found.`);
      } else {
        await userRef.delete();
        res.status(204).send();
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occurred while deleting the user: ${error.message}`);
    }
  });
  
  app.put('/users/:id', async (req, res) => {
    try {
    const { firstName, lastName, password } = req.body;
    const userId = req.params.id;
    const userRef = db.collection('Users').doc(userId);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
    res.status(404).send(User with ID: ${userId} does not exist.);
    return;
    }
  
  

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
