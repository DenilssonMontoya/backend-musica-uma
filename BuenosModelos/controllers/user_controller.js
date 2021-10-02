const bcrypt = require('bcrypt')

const { Usuario } = require ('../models')

class UserController {

     static create(req, res) {

        let payload = req.body

        const salt = bcrypt.genSaltSync(10)
        let newPassword = bcrypt.hashSync(payload.contrasena, salt)

        payload.contrasena=newPassword

        Usuario.create(payload)
            .then((data) => {
                res.send(data)
            })
            .catch((err) => {
                res.status(400).send({
                    message: err.message
                })
            })
    }


    static  (req, res) {

        let username = req.body.username

        let dbuser = Usuario.findOne({
            where: {
                nombreUsuario: username
            }
        }).then((data) => {

            if (bcrypt.compareSync(password, data.contrasena)) {
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