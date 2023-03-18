import firebase from "firebase/compat/app";
import "firebase/firestore";
import admin from 'firebase-admin';
https://console.firebase.google.com/u/0/project/petstory-fe5a4/settings/general/web:OWE2NDVmYTctYTRjYi00YWVlLTk1ZDktNjk2NjRkNDRiYTU1
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBSbneHsDzttyZppFYaBtSNNK2bZgvgU_w",
    authDomain: "petstory-fe5a4.firebaseapp.com",
    databaseURL: "https://petstory-fe5a4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "petstory-fe5a4",
    storageBucket: "petstory-fe5a4.appspot.com",
    messagingSenderId: "731008509279",
    appId: "1:731008509279:web:fe770344c4fbc42eb9c2ea"
};


admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: firebaseConfig.databaseURL,
  });
  
  const db = admin.firestore();
  const user = db.collection('Users');
  
  console.log(db instanceof admin.firestore.Firestore); // should log true
  
  export { admin, db, user };
