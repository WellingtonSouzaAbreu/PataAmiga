module.exports = app => {

    const getTemporaryHomes = async (req, res) => {
        await app.db('temporary-homes')
            .innerJoin('animals', 'animals.id', '=', 'temporary-homes.animalId')
            .then(async temporaryHomes => {
                temporaryHomes.aproximateAge = await estimateAllAges(temporaryHomes)
                temporaryHomes = await walkTemporaryHomes(temporaryHomes)
                console.log(temporaryHomes)
                res.status(200).send(temporaryHomes)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const walkTemporaryHomes = async (temporaryHomes) => {
        for (temporaryHome of temporaryHomes) {
            temporaryHome.animalImageURL = await getMainAnimalPicture(temporaryHome.animalId)
        }
        return temporaryHomes
    }

    const getMainAnimalPicture = async (idAnimal) => {
        return await app.db('animal-pictures')
            .select('imageURL')
            .first()
            .where({ animalId: idAnimal })
            .then(imagesURL => imagesURL.imageURL)
            .catch(err => {
                console.log(err)
                throw err
            })
    }

    const estimateAllAges = async (temporaryHome) => {
        for (animal of temporaryHome) {
            animal.aproximateAge = await estimateAge(animal.dateOfBirth)
        }
        return temporaryHome
    }


    const estimateAge = (dateOfBirth) => {
        let differenceInMonths = parseInt((Date.parse(new Date()) - Date.parse(dateOfBirth)) / 1000 / 60 / 60 / 24 / 30)

        if (differenceInMonths <= 1) {
            return 'Alguns dias'
        }

        if (differenceInMonths > 1 && differenceInMonths <= 12) {
            return `${differenceInMonths} meses`
        }

        if (parseInt(differenceInMonths > 12) == 1) {
            return `1 ano`
        } else {
            return `${parseInt(differenceInMonths / 12)} anos`
        }
    }

    const save = async (req, res) => {
        const { existsOrError } = app.api.validation

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

    const removeTemporaryHome = async (req, res) => {
        const idTemporaryHwome = req.params.id ? req.params.id : res.status(400).send('Identificação do lar temporário não informado')

        let temporaryHomesId = idTemporaryHome.split(',')
        console.log(temporaryHomesId)

        temporaryHomesId.forEach(async (idTemporaryHome) => {
            await app.db('temporary-homes')
                .where({ id: idTemporaryHome })
                .del()
                .then(_ => console.log(`Lar temporário de id: ${idTemporaryHome} deletado`))
                .catch(err => {
                    console.log(err)
                    res.status(500).send('Ocorreu um erro ao deletar lar temporário')
                })
        })

        res.status(200).send('Lar temporário removido com sucesso!')
    }

    return { getTemporaryHomes, save, removeTemporaryHome }
}