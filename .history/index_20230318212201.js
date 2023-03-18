import express from 'express';
https://chat.openai.com/chat
const User = require('./user_con.js');
const app = config;
app.use(express.json())

// Define your routes here
app.get('/', (req, res) => {
    res.send("Hello! welcome to API")
})

app.get('/users', User.getUser);
app.post('/users', User.addUser);
app.delete('/users/:id', User.delUser);
app.put('/users/:id', User.updateUser);


app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
