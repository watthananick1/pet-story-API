

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
const 