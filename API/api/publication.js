const { response } = require('express')
const multer = require('multer')

module.exports = app => {

    const getPublicationById = async (req, res) => {
        const idPublication = req.params.id ? req.params.id : res.status(400).send('Identificação da publicação não informada')

        await app.db('publications')
            .where({ id: idPublication })
            .first()
            .then(async (publication) => {
                publication.imagesURL = await getAllPulicationPictures(idPublication)
                res.status(200).send(publication)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const getAllPulicationPictures = async (idPublication) => {
        return await app.db('publications-pictures')
            .select('id', 'imageURL')
            .where({ publicationId: idPublication })
            .then(imagesURL => imagesURL)
            .catch(err => {
                console.log(err)
                throw err
            })
    }

    const getEvents = async (req, res) => {
        await app.db('publications')
            .where({ publicationType: 'event' })
            .then(async events => {
                events = await browseEvents(events)
                res.status(200).send(events)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const browseEvents = async (events) => {
        for (let event of events) {
            event.imagesURL = await getAllPulicationPictures(event.id)
        }
        return events
    }

    const getDones = async (req, res) => {
        await app.db('publications')
            .select('id', 'title', 'dateTime')
            .where({ publicationType: 'done' })
            .then(async dones => {
                dones = await browseDones(dones)
                res.status(200).send(dones)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const browseDones = async (dones) => {
        for (done of dones) {
            done.imagesURL = await getAllPulicationPictures(done.id)
        }
        return dones
    }

    const save = async (req, res) => {
        const { existsOrError } = app.api.validation

        const publication = req.body.publication ? req.body.publication : res.status(400).send('Dados da publicação remoto não informados')
        publication.dateTime = new Date()

        try {
            existsOrError(publication.dateTime, 'Data da publicação não informada')
            existsOrError(publication.title, 'Título não informado')
            existsOrError(publication.description, 'Descrição não informada')
            existsOrError(publication.city, 'Cidade não informada')
            existsOrError(publication.address, 'Endereço não informado')
            existsOrError(publication.publicationType, 'Tipo de publicação não informada')
        } catch (err) {
            return res.status(400).send(err)
        }

        await app.db('publications')
            .insert(publication)
            .then(id => res.status(200).json(id[0]))
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar publicação')
            })
    }

    const savePicture = async (req, res) => {

        const storage = multer.diskStorage({ // Objeto para configurar a pasta de salvamento e o nome 
            destination: function (req, file, callback) {
                callback(null, './_publicationPictures') // Pasta de destino
            },
            filename: function (req, file, callback) {
                callback(null, `${Date.now()}_${file.originalname}`)
            }
        })

        const upload = multer({ storage }).single('publicationPicture')

        upload(req, res, err => {
            if (err) {
                return res.end('Erro ao fazer upload da(s) imagem(s)')
            }

            let publicationPicture = {
                imageURL: req.file.filename,
                publicationId: req.body.publicationId
            }

            app.db('publication-pictures')
                .insert(publicationPicture)
                .then(_ => res.status(204).send())
                .catch(err => {
                    console.log(err)
                    res.status(500).send(err)
                })

        })

    }

    return { getPublicationById, getEvents, getDones, save, savePicture }
}