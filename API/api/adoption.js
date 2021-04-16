module.exports = app => {

    const save = async (req, res) => {
        const { existsOrError } = app.api.validation

        const adoption = req.body.adoption ? req.body.adoption : res.status(400).send('Dados da adoção não informados')

        try {
            existsOrError(adoption.dateAdoption, 'Data não informado')
            existsOrError(adoption.animalId, 'Animal não informado')
            existsOrError(adoption.userId, 'Usuário adotante não informado')
            existsOrError(adoption.collaboratorId, 'Colaborador não informado')
        } catch (err) {
            return res.status(400).send(err)
        }

        await app.db('adoptions')
            .insert(adoption)
            .then(_ => res.status(204).send())
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar adoção')
            })
    }

    return { save }
}

