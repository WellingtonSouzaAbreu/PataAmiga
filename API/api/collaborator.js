module.exports = app => {

    const getCollaborators = async (req, res) => {
        await app.db('collaborators')
            .select()
            .then(collaborators => res.status(200).send(collaborators))
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const save = async (req, res) => {
        const { existsOrError } = app.api.validation


        let collaborator // TODO Gambiarra
        if (req.body.collaborator) {
            collaborator = req.body.collaborator
        } else {
            console.log('Err')
            return res.status(400).send('Dados do colaborador não informados')
        }


        try {
            existsOrError(collaborator.name, 'Nome não infomado')
            existsOrError(collaborator.city, 'Cidade não infomada')
            existsOrError(collaborator.cellNumber, 'Celular não infomado')
            existsOrError(collaborator.dateOfBirth, 'Data de nascimento não infomada')
        } catch (err) {
            return res.status(400).send(err)
        }

        console.log(collaborator)

        collaborator.dateOfBirth = collaborator.dateOfBirth.split('Z')[0]

        if (!collaborator.id) {
            await app.db('collaborators')
                .insert(collaborator)
                .then(_ => res.status(204).send())
                .catch(err => {
                    console.log(err)
                    res.status(500).send('Erro ao cadastrar colaborador!')
                })
        } else {
            await app.db('collaborators')
                .update(collaborator)
                .where({ id: collaborator.id })
                .then(_ => res.status(204).send())
                .catch(err => {
                    console.log(err)
                    res.status(500).send('Erro ao Editar colaborador!')
                })
        }
    }

    const removeCollaborator = async (req, res) => {
        const idCollaborator = req.params.id ? req.params.id : res.status(400).send('Identificação do collaborador não informada')

        let collaboratorsId = idCollaborator.split(',')

        collaboratorsId.forEach(async (idCollaborator) => {
            await app.db('collaborators')
                .where({ id: idCollaborator })
                .del()
                .then(_ => console.log(`Collaborador de id: ${idCollaborator} deletado`))
                .catch(err => {
                    console.log(err)
                    res.status(500).send('Ocorreu um erro ao deletar colaborador')
                })
        })

        res.status(200).send('Colaborador removido com sucesso!')
    }

    return { getCollaborators, save, removeCollaborator }

}