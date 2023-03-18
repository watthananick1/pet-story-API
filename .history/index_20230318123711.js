import express from 'express';
import admin from 'firebase-admin';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import serviceAccount from './pet-story-f51e3-firebase-adminsdk-wsths-b452f92272.json' assert { type: "json" };


const app = express();
app.use(express.json())
// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pet-story-f51e3-default-rtdb.asia-southeast1.firebasedatabase.app'
});

const db = admin.firestore();
const storage = getStorage();

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
      const id = req.params.id;
      const data = req.body;
      const userRef = db.collection('Users').doc(id);
      const user = await userRef.get();
  
      if (!user.exists) {
        res.status(404).send(`User with ID ${id} not found.`);
      } else {
        await userRef.update(data);
        const updatedUser = { id: user.id, ...data };
        res.status(200).send(updatedUser);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occurred while updating the user: ${error.message}`);
    }
  });
  
  
  

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
