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

    const getPublications = async (req, res) => {
        await app.db('publications')
            .then(publications => res.status(200).send(publications))
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const getPublicationsSummarized = async (req, res) => {
        let title = req.query.title ? req.query.title.toLowerCase() : ''
        let page = !!req.query.page ? req.query.page : 0
        let rowsPerPage = req.query.rowsPerPage ? req.query.rowsPerPage : 10

        console.log(req.query)

        let offset = page > 0 ? (page * rowsPerPage) + 1 : page * rowsPerPage 
        let limit = parseInt(rowsPerPage) + 1 // Deixar o paginator ativo

        console.log(`Limit: ${limit}`)
        console.log(`Offset: ${offset}`)

        await app.db('publications')
            .select('id', 'title', 'startDateTime', 'publicationType')
            .where('title'.toLowerCase(), 'like', `%${title}%`)
            .offset(offset)
            .limit(limit)
            .then(publications => res.status(200).send(publications))
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
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
            .select('id', 'title', 'startDateTime', 'history', 'reasonRescue', 'animalName')
            .where({ publicationType: 'done' })
            .then(async dones => {
                dones = await browseDones(dones)
                console.log(dones)
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

        let publication = req.body.publication ? req.body.publication : res.status(400).send('Dados da publicação remoto não informados')
        publication.startDateTime = new Date((new Date((publication.startDateTime.split('Z')[0])).getTime()) - 14400000)// Subtraindo 4 horas
        publication.endDateTime = new Date((new Date((publication.endDateTime.split('Z')[0])).getTime()) - 14400000)// Subtraindo 4 horas

        try {
            existsOrError(publication.startDateTime, 'Data de inicio da publicação não informada')
            existsOrError(publication.endDateTime, 'Data de encerramento da publicação não informada')
            existsOrError(publication.publicationType, 'Tipo de publicação não informada')
            existsOrError(publication.title, 'Título não informado')

            if (publication.publicationType == 'event') {
                existsOrError(publication.description, 'Descrição não informada')
                existsOrError(publication.city, 'Cidade não informada')
                existsOrError(publication.district, 'Bairro não informado')
                existsOrError(publication.address, 'Endereço não informado')
            } else {
                existsOrError(publication.animalName, 'Nome do animal não informado')
                existsOrError(publication.history, 'História não informada')
                existsOrError(publication.reasonRescue, 'Razão do resgate não informada')
            }
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

            app.db('publications-pictures')
                .insert(publicationPicture)
                .then(_ => res.status(204).send())
                .catch(err => {
                    console.log(err)
                    res.status(500).send(err)
                })
        })
    }

    const removePublication = async (req, res) => {
        const idPublication = req.params.id ? req.params.id : res.status(400).send('Identificação da publicação não informada')

        let publicationsId = idPublication.split(',') 

        publicationsId.forEach(async (idPublication) => {
            await app.db('publications')
                .where({ id: idPublication })
                .del()
                .then(_ => console.log(`Publicação de id: ${idPublication} deletada`))
                .catch(err => {
                    console.log(err)
                    res.status(500).send('Ocorreu um erro ao deletar publicação')
                })
        })

        res.status(200).send('Publicações removidas com sucesso!')
    }

    return { getPublicationById, getPublications, getPublicationsSummarized, getEvents, getDones, save, savePicture, removePublication }
}