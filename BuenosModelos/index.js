const express = require('express');
// const dotenv = require('dotenv')
const bodyParser = require('body-parser')

const {AlumnoController} = require('./controllers/alumno_controller')

const app = express()
// dotenv.config()

app.use(bodyParser.json())

app.post('/creaAlumno', AlumnoController.create)
app.get('/listarAlumno', AlumnoController.findAll)

app.listen(3000)