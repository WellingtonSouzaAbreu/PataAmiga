const { authSecret } = require('./../config/.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

    const signin = async (req, res) => {
        if (!req.body.cellNumber || !req.body.password) {
            return res.status(400).send('Informe usuário e senha!')
        }

        const user = await app.db('users')
            .where({ cellNumber: req.body.cellNumber })
            .first()

        if (!user) return res.status(400).send('Usuário não encontrado!')

        const passwordsAreEquals = bcrypt.compareSync(req.body.password, user.password)
        if (!passwordsAreEquals) return res.status(401).send('Email/Senha inválidos!')

        const currentDateInSeconds = Math.floor(Date.now() / 1000)

        const payload = {
            id: user.id,
            name: user.name,
            cellNumber: user.cellNumber,
            /* iat: currentDateInSeconds,
            exp: currentDateInSeconds + (60 * 60 * 24 * 3) */
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    const save = async (req, res) => {
        const { existsOrError } = app.api.validation

        const user = req.body.user ? req.body.user : res.status(400).send('Dados do usuário não informados')

        try {
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.city, 'Cidade não informada')
            existsOrError(user.district, 'Bairro não informado')
            existsOrError(user.address, 'Endereço não informado')
            existsOrError(user.houseNumber, 'Número da casa não informado')
            existsOrError(user.phone, 'Celular não informado')
            existsOrError(user.password, 'Senha não informada')
            existsOrError(user.confirmPassword, 'Confirmação de senha não informada')
            if (user.password != user.confirmPassword) throw 'Senhas não conferem'

            const userFromDB = await app.db('users')
                .select('id')
                .where({ cellNumber: user.cellNumber }).first()

            if (userFromDB) throw 'Usuário já cadastrado'

        } catch (err) {
            return res.status(400).send(err)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        console.log(user.password)

        await app.db('users')
            .insert(user)
            .then(_ => res.status(204).send())
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar usuário')
            })
    }

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        console.log(salt)
        return bcrypt.hashSync(password, salt)
    }

    const validateToken = (req, res, next) => {
            let tokenFromHeader = req.headers.authorization ? req.headers.authorization : res.status(400).send('Token não informado. Realizar login novamente pode resolver o problema')

            try {
                if (tokenFromHeader) {
                    const token = jwt.decode(tokenFromHeader, authSecret)
                    console.log(token)
                    return res.status(200).send(true)
                }
            } catch (e) {
                // problema com o token
            }
            res.status(400).send('Falha ao autenticar o token')

    }

    const teste = (req, res, next) => {
        next()
        console.log('não devia ter chegado aqui!')
    }

    return { signin, save, validateToken , teste}
}

