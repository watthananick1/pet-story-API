const express = require('express')
const cors=require('cors')
const User = require('./config')
const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello! welcome to CarsAPI")
  })
app.post("/create",async(req, res)=>{
    const data = req.body
    await User.add(data)
    res.send({msg:"User Added"})
})

app.listen()

