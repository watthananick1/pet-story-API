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
    t
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
