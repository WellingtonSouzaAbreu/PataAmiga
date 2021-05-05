module.exports = app => {

    const save = async (req, res) => {
        const { existsOrError } = app.api.validation

        const rescue = req.body.rescue ? req.body.rescue : res.status(400).send('Dados do resgate não informados')

        let collaboratorsId = rescue.collaboratorsId
        delete rescue.collaboratorsId

        try {
            existsOrError(rescue.dateOfRescue, 'Data não informado')
            existsOrError(rescue.address, 'Endereço não informado')
            existsOrError(rescue.animalId, 'Animal não informado')
            existsOrError(rescue.veterinaryCareId, 'Cuidado veterinário não informado')
        } catch (err) {
            return res.status(400).send(err)
        }

        let idRescue
        await app.db('rescues')
            .insert(rescue)
            .then(id => idRescue = id[0])
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar resgate')
            })

        let collaboratorsData = []
        for (collaboratorId of collaboratorsId) {
            collaboratorsData.push({ collaboratorId: collaboratorId, rescueId: idRescue })
        }

        if (collaboratorsData.length < 1) {
            res.status(204).send()
        } else {
            await app.db('collaborators-involveds-in-rescue')
                .insert(collaboratorsData)
                .then(_ => res.status(204).send())
                .catch(err => {
                    console.log(err)
                    res.status(500).send('Erro ao cadastrar collaboradores envolvidos no resgate')
                })
        }

    }

    return { save }
}
