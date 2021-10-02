const {Sesion} = require('../models')

class SesionController {

    static create(req, res) {
        let payload = req.body

        Sesion.create(payload)
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
        Sesion.findAll()
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

module.exports = {SesionController}