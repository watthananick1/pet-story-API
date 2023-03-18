import express from 'express';
import admin from 'firebase-admin';

const serviceAccount = require("./pet-story-f51e3-firebase-adminsdk-wsths-b452f92272.json");

const app = express();
// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://pet-story-f51e3-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const User = require('')

app.use(express.json());

// Define your routes here
app.get('/', (req, res) => {
  res.send("Hello! welcome to API")
});

app.get('/users', getUser);
app.post('/users', addUser);
app.delete('/users/:id', delUser);
app.put('/users/:id', updateUser);

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
