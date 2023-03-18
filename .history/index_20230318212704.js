import express from 'express';
import { app } from './admin_con.js';
import { getUser, addUser, delUser, updateUser } from './user_con.js';

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
