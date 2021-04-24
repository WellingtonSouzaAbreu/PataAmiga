const multer = require('multer')

module.exports = app => {

    const save = async(req, res) => {
        const { existsOrError} = app.api.validation

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

    const savePicture = async(req, res) => {

        const storage = multer.diskStorage({ // Objeto para configurar a pasta de salvamento e o nome 
            destination: function(req, file, callback) {
                callback(null, './_publicationPictures') // Pasta de destino
            },
            filename: function(req, file, callback) {
                callback(null, `${Date.now()}_${file.originalname}`)
            }
        })

        const upload = multer({ storage }).single('publicationPicture')

        upload(req, res, err => {
            if (err) {
                return res.end('Erro ao fazer upload da(s) imagem(s)')
            }

            console.log(req.body)

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

    return { save, savePicture }
}