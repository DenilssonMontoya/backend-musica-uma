const express = require('express')
const myLogger = require('./middlewares/logger_middleware')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json());

app.get('/',(req, res) =>{
    res.send("hello world")
})

app.listen(3000)