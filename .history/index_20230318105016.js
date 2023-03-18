import express from 'express';
import cors from 'cors';
import { db } from './config.js';
import { collection, addDoc } from "firebase/firestore"; 

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello! welcome to API")
})
app.post("/api/create",async(req, res)=>{
    const data = req.body;
    //console.log("Data fo User", data);
    const user = {
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
      };
    await addDoc(collection(db, "Users"), {
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.email,
      });
    res.send({msg:"User Added"});
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
