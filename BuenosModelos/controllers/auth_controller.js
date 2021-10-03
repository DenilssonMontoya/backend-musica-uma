const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const {usuarioUMA} = require('../models')

class AuthController {

    static auth(req, res) {

        let secret = process.env.TOKEN_SECRET

        let username = req.body.username
        let password = req.body.password

        let dbuser = usuarioUMA.findOne({
            where: {
                nombreUsuario: username
            }
        }).then((data) => {

            if (bcrypt.compareSync(password, data.contrasenia)) {
                let payload = { username: username, role: data.tipo }
                const token = jwt.sign(payload, secret, {expiresIn: '1800s'})
                res.json(token)
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

module.exports = { AuthController }