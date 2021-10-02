const {Alumno} = require('../models')

class AlumnoController {

    static create(req, res) {
        let payload = req.body

        Alumno.create(payload)
            .then( (data) => {
                res.send(data)
            })
            .catch( (err) => {
                res.status(400).send({
                    message: err.message
                })
            })
    }

    static findAll(req, res) {
        Alumno.findAll()
            .then( (data) => {
                res.send(data)
            })
            .catch( (err) => {
                res.status(404).send({
                    message: err.message
                })
            })
    }
}

module.exports = {AlumnoController}