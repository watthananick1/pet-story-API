// import admin from "firebase-admin";
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL:
//       "https://pet-story-f51e3-default-rtdb.asia-southeast1.firebasedatabase.app",
//   });
// const db = admin.firestore();

import { db } from '/Users/watthananick/petstory_api/firebase';

const userAll = async (req, res) => {
    try {
      const data = req.body;
      console.log(data);
      const userRef = db.collection("Users").doc();
      const newUser = {
        id: userRef.id,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
      };
      await userRef.set(newUser);
      res.status(201).send(newUser);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send(`An error occurred while creating the user: ${error.message}`);
    }
}

module.exports = { userAll }