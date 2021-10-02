const bcrypt = require('bcrypt')

const { Usuario } = require ('../models')

class UserController {

     static create(req, res) {

        let payload = req.body

        const salt = bcrypt.genSaltSync(10)
        let newPassword = bcrypt.hashSync(payload.contrasena, salt)

        payload.contrasena=newPassword

        Usuario.create(payload)
            .then( (data) => {
                res.send(data)
            })
            .catch( (err) => {
                res.status(400).send({
                    message: err.message
                })
            })
    }

}

module.exports = { UserController }