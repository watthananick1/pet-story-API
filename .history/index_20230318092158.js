import express from 'express';
import cors from 'cors';
import { db } from './config.js';

const user = db
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

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
