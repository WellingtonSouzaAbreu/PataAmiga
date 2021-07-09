module.exports = app => {

    const save = async (req, res) => {
        const { existsOrError } = app.api.validation

        let veterinaryCare = req.body.veterinaryCare ? req.body.veterinaryCare : res.status(400).send('Dados dos cuidado veterinário não informados')

        const costsVeterinaries = [...veterinaryCare.costsVeterinaries]
        delete veterinaryCare.costsVeterinaries

        veterinaryCare.totalCostOfTreatment = getTotalCostOfTreatment(costsVeterinaries)

        try {
            existsOrError(veterinaryCare.veterinaryName, 'Nome do veterinário não informado')
            existsOrError(veterinaryCare.totalCostOfTreatment, 'Custo total do tratamento não informado')
            existsOrError(veterinaryCare.dateOfVeterinaryCare, 'Data não informada')

        } catch (err) {
            return res.status(400).send(err)
        }

        let idVeterinaryCare
        await app.db('veterinary-cares')
            .insert(veterinaryCare)
            .then(id => idVeterinaryCare = id[0])
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar cuidado veterinário')
            })

        costsVeterinaries.map(cost => cost.veterinaryCareId = idVeterinaryCare)

        await app.db('costs-veterinaries')
            .insert(costsVeterinaries)
            .then(_ => res.status(204).send())
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar gastos veterinários')
            })
    }

    const getTotalCostOfTreatment = (costsVeterinaries) => {
        let totalCost = 0
        costsVeterinaries.map(cost => totalCost += cost.value)
        return totalCost
    }
    return { save }
}