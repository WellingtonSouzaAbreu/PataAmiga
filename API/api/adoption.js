module.exports = app => {

    const getAdoptions = async (req, res) => {
        let name = req.query.name ? req.query.name.toLowerCase() : ''
        let page = !!req.query.page ? req.query.page : 0
        let rowsPerPage = req.query.rowsPerPage ? req.query.rowsPerPage : 10

        let offset = page > 0 ? (page * rowsPerPage) + 1 : page * rowsPerPage
        let limit = parseInt(rowsPerPage) + 1 // Deixar o paginator ativo

        // console.log(`Limit: ${limit}`)
        // console.log(`Offset: ${offset}`)

        // TODO selecionar dados pertinentes Á adopção
        
        await app.db('adoptions')
            .innerJoin('collaborators', 'adoptions.collaboratorId', '=', 'collaborators.id')
            .innerJoin('animals', 'adoptions.animalId', '=', 'animals.id')
            .innerJoin('users', 'adoptions.userId', '=', 'users.id')
            // .where('name'.toLowerCase(), 'like', `%${name}%`)
            .offset(offset)
            .then(adoptions => {
                console.log(adoptions)
                res.status(200).send(adoptions)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const alreadyAdoptedAndExpressInterest = async (req, res) => {
        const userId = req.user.id
        const animalId = req.params.animalId

        let adopted
        let expressInterest

        await app.db('adoptions')
            .where({ userId: userId, animalId: animalId })
            .first()
            .then(adoption => {
                if (adoption) {
                    console.log('Adotado')
                    adopted = true
                } else {
                    console.log('Não adotado')
                    adopted = false
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })

        await app.db('interesteds-in-adoption')
            .where({ userId: userId, animalId: animalId })
            .first()
            .then(interest => {
                console.log(interest)
                if (interest) {
                    console.log('Manifestado')
                    expressInterest = true
                } else {
                    console.log('Não manifestado')
                    expressInterest = false
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })

        res.status(200).json({ adopted, expressInterest })
    }

    const getNumberOfAdoptionsByUser = async (req, res) => {

        const userId = req.user.id

        console.log(userId)

        await app.db('adoptions')
            .where({ userId: userId })
            .count()
            .then(async ([numberOfAdoptions]) => {
                console.log(numberOfAdoptions["count(*)"])
                res.status(200).json(numberOfAdoptions["count(*)"])
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const getAnimalsByUserAdoption = async (req, res) => {

        const userId = req.user.id

        await app.db('adoptions')
            .select('animalId')
            .where({ userId: userId })
            .then(async (animalsId) => {

                let animalsWithPicture = []
                for ({ animalId } of animalsId) {

                    await app.db('animals')
                        .select('id', 'name', 'breed', 'aproximateAge')
                        .where({ id: animalId })
                        .then(async (animals) => {
                            animalsWithPicture.push(await getAnimalMainPicture(animals))
                        })
                        .catch(err => {
                            console.log(err)
                            throw err
                        })
                }

                animalsWithPicture = animalsWithPicture.map(([animalInArray]) => animalInArray)
                res.status(200).send(animalsWithPicture)
            })
            .catch(err => {
                console.log(err)
                throw err
            })

    }

    const getAnimalMainPicture = async (animals) => {
        for (animal of animals) {
            await app.db('animal-pictures')
                .select('imageURL')
                .where({ animalId: animal.id })
                .first()
                .then(imageURL => animal.imageURL = imageURL ? imageURL.imageURL : null)
                .catch(err => {
                    console.log(err)
                    throw 'Erro o obter imagem do animal'
                    // res.status(500).send(err)
                })
        }
        return animals
    }

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

    return { getAdoptions, alreadyAdoptedAndExpressInterest, getNumberOfAdoptionsByUser, getAnimalsByUserAdoption, save }
}