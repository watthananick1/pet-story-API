

const getUser = async (req, res) => {
    try {
        const usersRef = db.collection('Users');
        const snapshot = await usersRef.get();
        const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).send(users);
      } catch (error) {
        console.error(error);
        res.status(500).send(`An error occurred while retrieving users: ${error.message}`);
      }
}
const addUser = async (req, res) => {
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
const delUser = async (req, res) => {
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
}
}