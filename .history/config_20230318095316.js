import firebase from "firebase/compat/app";
import "firebase/firestore";
import admin from 'firebase-admin';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    https://console.firebase.google.com/u/0/project/petstory-fe5a4/settings/general/web:OWE2NDVmYTctYTRjYi00YWVlLTk1ZDktNjk2NjRkNDRiYTU1
};


admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: firebaseConfig.databaseURL,
  });
  
  const db = admin.firestore();
  const user = db.collection('Users');
  
  console.log(db instanceof admin.firestore.Firestore); // should log true
  
  export { admin, db, user };
