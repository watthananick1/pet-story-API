import firebase from "firebase/compat/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSbneHsDzttyZppFYaBtSNNK2bZgvgU_w",
    authDomain: "petstory-fe5a4.firebaseapp.com",
    databaseURL: "https://petstory-fe5a4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "petstory-fe5a4",
    storageBucket: "petstory-fe5a4.appspot.com",
    messagingSenderId: "731008509279",
    appId: "1:731008509279:web:fe770344c4fbc42eb9c2ea"
};

const app = firebase.initializeApp(firebaseConfig);
console.log(app instanceof firebase.app.App); // should log true

const db = getFirestore(app);
console.log(db instanceof firebase.firestore.Firestore); // should log true

const user = db.collection("Users");
export default user;
