import express from 'express';
import cors from 'cors';
import { db,user } from './config.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello! welcome to API")
})
app.post("/api/create",async(req, res)=>{
    const data = req.body;
    //console.log("Data fo User", data);
    await user.add(data)
    res.send({msg:"User Added"});
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
