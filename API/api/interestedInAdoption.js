const multer = require('multer')

module.exports = app => {

    const getInterestedsInAdoption = async (req, res) => {
        const animalId = req.params.animalId ? req.params.animalId : res.status(400).send('Animal não encontrado')

        await app.db('interesteds-in-adoption')
            .where({ animalId: animalId })
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
                .select('name', 'cellNumber')
                .first()
                .then(userData => {
                    interested.name = userData.name
                    interested.cellNumber = userData.cellNumber
                })
                .catch(err => console.log(err))/* res.status(500).send('Não foi possível localizar usuários interessados') */
        }
        return interesteds
    }

    const getPicturesOfInteresteds = async (interesteds) => {

        for (interested of interesteds) {
            await app.db('interesteds-pictures')
                .where({ interestedInAdoptionId: interested.id })
                .then(interestedPictures => {
                    console.log(interestedPictures)
                    interested.imagesURL = interestedPictures
                })
                .catch(err => console.log(err))/* res.status(500).send('Não foi possível localizar usuários interessados') */
        }
        return interesteds
    }

    const save = async (req, res) => {
        const { existsOrError } = app.api.validation

        const userId = req.headers.userid ? req.headers.userid : res.status(400).send('Usuário não informado')

        let interestedInAdoption = req.body.interestedInAdoption ? req.body.interestedInAdoption : res.status(400).send('Dados do interesse não informados')
        interestedInAdoption.userId = userId
        interestedInAdoption.animalId = req.params.animalId ? req.params.animalId : res.status(400).send('Animal não identificado')

        try {
            existsOrError(interestedInAdoption.description, 'Descrição não informada')
            existsOrError(interestedInAdoption.userId, 'Usuário não informado')
            existsOrError(interestedInAdoption.animalId, 'Animal não informado')
        } catch (err) {
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
                callback(null, './_interestedsPictures') // Pasta de destino
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

            console.log(req.body)

            let interestedPicture = {
                imageURL: req.file.filename,
                interestedInAdoptionId: req.body.interestedInAdoptionId
            }

            app.db('interesteds-pictures')
                .insert(interestedPicture)
                .then(_ => res.status(204).send())
                .catch(err => {
                    console.log(err)
                    res.status(500).send(err)
                })

        })
    }

    return { getInterestedsInAdoption, save, savePicture }
}