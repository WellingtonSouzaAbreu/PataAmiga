const multer = require('multer') // Interpretar o arquivo que vem do upload


module.exports = app => {

    const save = async (req, res) => {
        const { existsOrError } = app.api.validation

        const userId = req.headers.userid ? req.headers.userid : res.status(400).send('Usuário não informado')

        let interestedInAdoption = req.body.interestedInAdoption ? req.body.interestedInAdoption : res.status(400).send('Dados do interesse não informados')
        interestedInAdoption.userId = userId

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
                interestedsInAdoptionId: req.body.interestedInAdoptionId
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

    return { save, savePicture }
}

