module.exports = app => {

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
        } catch (err) {
            return res.status(400).send(err)
        }

        await app.db('users')
            .insert(user)
            .then(_ => res.status(204).send())
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar usuário')
            })
    }

    return { save }
}

