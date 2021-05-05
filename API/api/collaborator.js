module.exports = app => {

    const save = async (req, res) => {
        const { existsOrError } = app.api.validation

        let collaborator = req.body.collaborator ? req.body.collaborator : res.status(400).send('Dados do colaborador não informados')

        try {
            existsOrError(collaborator.name, 'Nome não infomado')
            existsOrError(collaborator.city, 'Cidade não infomada')
            existsOrError(collaborator.cellNumber, 'Celular não infomado')
            existsOrError(collaborator.dateOfBirth, 'Data de nascimento não infomada')
        } catch (err) {
            return res.status(400).send(err)
        }

        await app.db('collaborators')
            .insert(collaborator)
            .then(_ => res.status(204).send())
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar colaborador')
            })
    }

    return { save }

}