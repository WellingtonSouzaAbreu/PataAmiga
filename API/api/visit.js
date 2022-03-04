const path = require('path')

module.exports = app => {
    const { existsOrError, objectIsNull, isNumber } = app.api.validation
    const { showLog, convertStringToDate, convertStringWithCommaToArray } = app.api.commonFunctions

    const getVisitsByAdoption = async (req, res) => {
        const adoptionId = isNumber(req.params.adoptionId) && req.params.adoptionId
        if (!adoptionId) return res.status(400).send('Não foi possível identificar a adoção!')

        await app.db('visits')
            .where({ adoptionId })
            .then(visits => {
                return res.status(200).send(visits)
            })
            .catch(err => {
                showLog(err, 'error')
                app.api.bugReport.writeInBugReport(err, path.basename(__filename))
                return res.status(500).send(err)
            })
    }

    const save = async (req, res) => {
        const visit = !objectIsNull(req.body.visit) && req.body.visit
        if (!visit) return res.status(400).send('Dados da visita não informados!')

        try {
            existsOrError(visit.report, 'Relatório não informado!')
            existsOrError(visit.adoptionId, 'Adoção não informada!')
            existsOrError(visit.date, 'Data não informada!')
        } catch (err) {
            return res.status(400).send(err)
        }

        visit.date = convertStringToDate(visit.date)

        await app.db('visits')
            .insert(visit)
            .then(_ => res.status(204).send())
            .catch(err => {
                showLog(err, 'error')
                app.api.bugReport.writeInBugReport(err, path.basename(__filename))
                return res.status(500).send('Erro ao cadastrar visita!')
            })
    }

    const removeVisit = async (req, res) => {
        const idVisit = req.params.id && req.params.id
        if(!idVisit) return res.status(400).send('Identificação da visita não informada!')

        let visitsId = convertStringWithCommaToArray(idVisit)
        showLog(visitsId)

        visitsId.forEach(async (id) => {
            await app.db('visits')
                .where({ id })
                .del()
                .then(_ => showLog(`Visita de id: ${id} deletado`))
                .catch(err => {
                    showLog(err, 'error')
                    app.api.bugReport.writeInBugReport(err, path.basename(__filename))
                    return res.status(500).send()
                })
        })

        return res.status(204).send()
    }

    return { getVisitsByAdoption, save, removeVisit }
}

// 80 -> 70