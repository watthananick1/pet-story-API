import express from 'express';
import admin from 'firebase-admin';
const User = require('./user_con');
const serviceAccount = require("./pet-story-f51e3-firebase-adminsdk-wsths-b452f92272.json");

const app = express();
// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://pet-story-f51e3-default-rtdb.asia-southeast1.firebasedatabase.app",
});

app.use(express.json());

// Define your routes here
app.get('/', (req, res) => {
  res.send("Hello! welcome to API")
});

app.get('/users', User.getUser);
app.post('/users', User.addUser);
app.delete('/users/:id', User.delUser);
app.put('/users/:id', User.updateUser);

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
