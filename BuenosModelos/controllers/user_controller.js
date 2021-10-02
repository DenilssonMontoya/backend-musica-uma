const bcrypt = require('bcrypt')

const { usuarioUMA } = require ('../models')

class UserController {

     static create(req, res) {

        let payload = req.body

        const salt = bcrypt.genSaltSync(10)
        let newPassword = bcrypt.hashSync(payload.contrasenia, salt)

        payload.contrasenia=newPassword

        usuarioUMA.create(payload)
            .then((data) => {
                res.send(data)
            })
            .catch((err) => {
                res.status(400).send({
                    message: err.message
                })
            })
    }


    static login (req, res) {

        let username = req.body.username

        let dbuser = usuarioUMA.findOne({
            where: {
                nombreUsuario: username
            }
        }).then((data) => {

            if (bcrypt.compareSync(password, data.contrasenia)) {
                res.json(data)
            } else {
                console.log("contrasenas distintas")
                res.sendStatus(401)
            }
        }).catch((err) => {
            console.log("usuario no existe")
            res.sendStatus(401)
        })

            
    }        

}

module.exports = { UserController }