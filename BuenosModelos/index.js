const express = require('express');
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const { AuthController } = require('./controllers/auth_controller')
const { UserController } = require('./controllers/user_controller')

const jwt_middleware = require('./middlewares/jwt_middleware')

const {AlumnoController} = require('./controllers/alumno_controller')
const {TareaController} = require('./controllers/tarea_controller')
const {SesionController} = require('./controllers/sesion_controller')

dotenv.config()
const app = express()

app.use(bodyParser.json())

app.post('/crearAlumno', jwt_middleware, AlumnoController.create)
app.get('/listarAlumnos', jwt_middleware, AlumnoController.findAll)
app.get('/listarAlumno/:id', jwt_middleware, AlumnoController.findOne)
app.put('/actualizarAlumno', jwt_middleware, AlumnoController.update)
app.delete('/eliminarAlumno', jwt_middleware, AlumnoController.delete)
app.get('/listarTareas', jwt_middleware, TareaController.findAll)
app.get('/listarSesiones', jwt_middleware, SesionController.findAll)
app.post('/auth', AuthController.auth)
app.post('/users', UserController.create)


app.listen(3000)