const express = require('express')
const myLogger = require('./middlewares/logger_middleware')
const app = express()


app.use(myLogger);

app.get('/',(req, res) =>{
    res.send("hello world")
})

app.listen(3000)