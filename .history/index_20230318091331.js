It seems like you're trying to use an import statement in Node.js, which is not supported by default. To use ES6 module syntax, you need to add "type": "module" in your package.json file. Try modifying your package.json file to look like this:

json
Copy code
{
  "name": "package.json",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "firebase": "^9.18.0",
    "nodemon": "^2.0.21"
  },
  "exports": {
    ".": "./index.js",
    "./auth": "./config.js",
    "./database": "./index.js",
    "./firestore": "./index.js"
  }
}
Then, modify your config.js file to use import instead of require:

js
Copy code
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  projectId: "<your-project-id>",
  storageBucket: "<your-storage-bucket>",
  messagingSenderId: "<your-messaging-sender-id>",
  appId: "<your-app-id>"
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const user = db.collection('Users')

export default user;
Similarly, modify your index.js file to use import instead of require:

js
Copy code
import express from 'express';
import cors from 'cors';
import user from './config.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello! welcome to CarsAPI")
})
app.post("/api/create",async(req, res)=>{
    const data = req.body;
    console.log("Data fo User", data);
    // await User.add(data)
    res.send({msg:"User Added"});
});

app.listen(8080, () => {
    console.log('Start server at port 8080.')
  });

