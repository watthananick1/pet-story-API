import express from 'express';
const {app, db} = require('./config')
const User = require('./user_con')
app.use(express.json())

// Define your routes here
app.get('/', (req, res) => {
    res.send("Hello! welcome to API")
})
app.get('/users', async (req, res) => {
  
});

app.post('/users', async (req, res) => {

  });
  
  app.delete('/users/:id', async (req, res) => {

  });
  
  app.put('/users/:id', async (req, res) => {

  });
  
  

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
