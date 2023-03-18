

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
const
}