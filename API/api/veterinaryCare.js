module.exports = app => {

    const getVeterinaryCares = async (req, res) => {

    }

    const save = async (req, res) => {
        console.log(req.body.veterinaryCare)
        const { existsOrError } = app.api.validation

        let veterinaryCare = req.body.veterinaryCare ? req.body.veterinaryCare : res.status(400).send('Dados dos cuidado veterinário não informados')

        const costsVeterinaries = [...veterinaryCare.costsVeterinaries]
        delete veterinaryCare.costsVeterinaries

        // veterinaryCare.totalCostOfTreatment = getTotalCostOfTreatment(costsVeterinaries)

        try {
            existsOrError(veterinaryCare.veterinaryName, 'Nome do veterinário não informado')
            existsOrError(veterinaryCare.totalCostOfTreatment, 'Custo total do tratamento não informado')
            existsOrError(veterinaryCare.dateOfVeterinaryCare, 'Data não informada')

        } catch (err) {
            console.log(err)
            return res.status(400).send(err)
        }

        veterinaryCare.dateOfVeterinaryCare = veterinaryCare.dateOfVeterinaryCare.split('Z')[0]

        let idVeterinaryCare
        await app.db('veterinary-cares')
            .insert(veterinaryCare)
            .then(id => /* idVeterinaryCare = id[0] */res.status(200).send())
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar cuidado veterinário')
            })


        /* costsVeterinaries.map(cost => cost.veterinaryCareId = idVeterinaryCare)

        await app.db('costs-veterinaries')
            .insert(costsVeterinaries)
            .then(_ => res.status(204).send())
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar gastos veterinários')
            }) */
    }

    const getTotalCostOfTreatment = (costsVeterinaries) => {
        let totalCost = 0
        costsVeterinaries.map(cost => totalCost += cost.value)
        return totalCost
    }

    const removeVeterinaryCare = async (req, res) => {
        const idVeterinaryCare = req.params.id ? req.params.id : res.status(400).send('Identificação do cuidado veterinário não informado')

        let veterinaryCaresId = idVeterinaryCare.split(',')

        veterinaryCaresId.forEach(async (idVeterinaryCare) => {
            await app.db('veterinary-cares')
                .where({ id: idVeterinaryCare })
                .del()
                .then(_ => console.log(`Cuidado veterinário de id: ${idVeterinaryCare} deletado`))
                .catch(err => {
                    console.log(err)
                    res.status(500).send('Ocorreu um erro ao deletar cuidado veterinário')
                })
        })

        res.status(200).send('Cuidado veterinário removido com sucesso!')
    }
    return { getVeterinaryCares, save, removeVeterinaryCare }
}