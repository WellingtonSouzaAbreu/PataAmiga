module.exports = app => {

    const getRescue = async(req,res) => {
        const animalId = req.params.animalId ? req.params.animalId : res.status(400).send('Animal não identificado')

        await app.db('rescues')
            .where({animalId: animalId})
            .first()
            .then(rescue => res.status(200).send(rescue))
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const save = async (req, res) => {
        const { existsOrError, objectIsNull } = app.api.validation

        const rescue = await objectIsNull(req.body.rescue) ? res.status(400).send('Dados do resgate não informados') : req.body.rescue
        rescue.animalId = req.params.animalId ? req.params.animalId : res.status(400).send('Animal não identificado')
        
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

    return {getRescue, save }
}

