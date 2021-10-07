module.exports = app => {

    const getVisitsByAdoption = async (req, res) => {
        await app.db('visits')
        .where({adoptionId: req.params.idAdoption})
            .then(visits => {
                res.status(200).send(visits)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const save = async (req, res) => {
        const { existsOrError } = app.api.validation

        let visit = req.body.visit ? req.body.visit : res.status(400).send('Dados da visita não informados')
        visit.date = new Date()

        try {
            existsOrError(visit.report, 'Relatório não informado')
            existsOrError(visit.adoptionId, 'Adoção não informada')
            existsOrError(visit.date, 'Data não informada')
        } catch (err) {
            return res.status(400).send(err)
        }

        await app.db('visits')
            .insert(visit)
            .then(_ => res.status(204).send())
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar visita')
            })
    }

    return { getVisitsByAdoption, save }
}