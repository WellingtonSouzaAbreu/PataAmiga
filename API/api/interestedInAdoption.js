const multer = require('multer')

module.exports = app => {

    const getInterestedsInAdoption = async (req, res) => {
        let animalName = req.query.animalName ? req.query.animalName.toLowerCase() : ''
        let page = !!req.query.page ? req.query.page : 0
        let rowsPerPage = req.query.rowsPerPage ? req.query.rowsPerPage : 10

        let offset = page > 0 ? (page * rowsPerPage) + 1 : page * rowsPerPage
        let limit = parseInt(rowsPerPage) + 1 // Deixar o paginator ativo

        // console.log(`Limit: ${limit}`)
        // console.log(`Offset: ${offset}`)

        await app.db('interesteds-in-adoption as interest')
            .innerJoin('animals', 'animals.id', '=', 'interest.animalId')
            .select('interest.id', 'interest.description', 'interest.userId', 'interest.animalId', 'interest.verified', 'animals.name as animalName')
            .where('animals.name'.toLowerCase(), 'like', `%${animalName}%`)
            .offset(offset)
            .then(async interesteds => {
                interesteds = await getUserNameAndCellNumberById(interesteds)
                interesteds = await getPicturesOfInteresteds(interesteds)
                // console.log(interesteds)
                res.status(200).send(interesteds)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const getUserNameAndCellNumberById = async (interesteds) => {
        for (interested of interesteds) {
            await app.db('users')
                .select('name as userName', 'cellNumber')
                .first()
                .then(userData => {
                    interested.userName = userData.userName
                    interested.cellNumber = userData.cellNumber
                })
                .catch(err => console.log(err))/* res.status(500).send('Não foi possível localizar usuários interessados') */
        }
        return interesteds
    }

    const getPicturesOfInteresteds = async (interesteds) => {
        for (interested of interesteds) {
            await app.db('interesteds-pictures')
                .select('imageURL')
                .where({ interestedInAdoptionId: interested.id })
                .then(interestedPictures => {
                    interested.imagesURL = interestedPictures.map(interest => interest.imageURL)
                })
                .catch(err => console.log(err))
        }
        return interesteds
    }

    const save = async (req, res) => {
        const { existsOrError } = app.api.validation

        const userId = /* req.user.id  */ 1

        let interestedInAdoption = req.body.interestedInAdoption ? req.body.interestedInAdoption : res.status(400).send('Dados do interesse não informados')
        interestedInAdoption.userId = userId
        interestedInAdoption.animalId = req.params.animalId

        try {
            existsOrError(interestedInAdoption.description, 'Descrição não informada')
            existsOrError(interestedInAdoption.userId, 'Usuário não informado')
            existsOrError(interestedInAdoption.animalId, 'Animal não informado')
        } catch (err) {
            console.log(err)
            return res.status(400).send(err)
        }

        await app.db('interesteds-in-adoption')
            .insert(interestedInAdoption)
            .then(id => res.status(200).json(id[0]))
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar interesse na adoção')
            })
    }

    const savePicture = async (req, res) => {

        const storage = multer.diskStorage({ // Objeto para configurar a pasta de salvamento e o nome 
            destination: function (req, file, callback) {
                callback(null, './_interestedPictures') // Pasta de destino
            },
            filename: function (req, file, callback) {
                callback(null, `${Date.now()}_${file.originalname}`)
            }
        })

        const upload = multer({ storage }).single('interestedPicture')

        upload(req, res, err => {
            if (err) {
                return res.end('Erro ao fazer upload da(s) imagem(s)')
            }

            // console.log(req.body)

            let interestedPicture = {
                imageURL: req.file.filename,
                interestedInAdoptionId: req.body.interestedInAdoptionId
            }

            // console.log(interestedPicture)

            app.db('interesteds-pictures')
                .insert(interestedPicture)
                .then(_ => res.status(204).send())
                .catch(err => {
                    console.log(err)
                    res.status(500).send(err)
                })

        })
    }

    const toggleVerifiedState = async (req, res) => {
        await app.db('interesteds-in-adoption')
            .update({ verified: req.body.verified })
            .where({id: req.body.idInterested})
            .then(_ => res.status(204).send())
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const removeInterested = async (req, res) => {
        const idInterested = req.params.id ? req.params.id : res.status(400).send('Identificação do interessado não informada')

        let interestedsId = idInterested.split(',')

        interestedsId.forEach(async (idInterested) => {
            await app.db('interesteds-in-adoption')
                .where({ id: idInterested })
                .del()
                .then(_ => console.log(`Interesse de id: ${idInterested} deletada`))
                .catch(err => {
                    console.log(err)
                    res.status(500).send('Ocorreu um erro ao deletar interesse')
                })
        })

        res.status(200).send('Interesse em adotar removido com sucesso!')

    }

    return { getInterestedsInAdoption, save, savePicture, toggleVerifiedState, removeInterested }
}