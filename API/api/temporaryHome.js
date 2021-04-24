module.exports = app => {

    const save = async (req, res) => {
        const {existsOrError} = app.api.validation

        let temporaryHome = req.body.temporaryHome ? req.body.temporaryHome : res.status(400).send('Dados da doação não informados')
        temporaryHome.date = new Date()

        try {
            existsOrError(temporaryHome.adopterName, 'Nome do adotante não informado')
            existsOrError(temporaryHome.cellNumber, 'Celular adotante não informado')
            existsOrError(temporaryHome.date, 'Data não informada')
            existsOrError(temporaryHome.animalId, 'Animal não informado')


        } catch (err) {
            return res.status(400).send(err)
        }

        await app.db('temporary-homes')
            .insert(temporaryHome)
            .then(_ => res.status(204).send())
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar lar temporário')
            })
    }

    return { save }
}