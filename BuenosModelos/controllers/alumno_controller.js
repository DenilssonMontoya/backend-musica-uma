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

    static findOne(req, res) {
        let pk = req.params.id
        Alumno.findByPk(pk)
            .then( (data) => {
                res.send(data)
            })
            .catch( (err) => {
                res.status(404).send({
                    message: err.message
                })
            })
    }

    static update(req, res) {
        // PUT product/:id
        let pk = req.params.id
        let payload = req.body

        Alumno.update(payload, {where: {id: pk} })
            .then( (data) => {
                res.send(data)
            })
            .catch( (err) => {
                res.status(400).send({
                    message: err.message
                })
            })

    }

    static delete(req, res) {
        let pk = req.params.id
        Alumno.destroy({ where: {id: pk} })
            .then( (data) => {
                res.status(200).send("DELETED")
            })
            .catch( (err) => {
                res.status(400).send({
                    message: err.message
                })
            })
    }
}

module.exports = {AlumnoController}