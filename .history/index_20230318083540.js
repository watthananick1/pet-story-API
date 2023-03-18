const express = require('express')
const cors=require('cors')
const User = require('./config')
const app = express()
app.use(express.json())
app.use(cors())

app.post("/create",async(req, res)=>{})

