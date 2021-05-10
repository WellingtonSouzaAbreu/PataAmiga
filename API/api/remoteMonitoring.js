const multer = require('multer')

module.exports = app => {

    const save = async(req, res) => {
        const { existsOrError } = app.api.validation

        const remoteMonitoring = req.body.remoteMonitoring ? req.body.remoteMonitoring : res.status(400).send('Dados do monitoramento remoto não informados')
        remoteMonitoring.date = new Date()

        try {
            existsOrError(remoteMonitoring.date, 'Data não informada')
            existsOrError(remoteMonitoring.observations, 'Observações não informadas')
            existsOrError(remoteMonitoring.adoptionId, 'Adoção não informada')
        } catch (err) {
            return res.status(400).send(err)
        }

        await app.db('remote-monitorings')
            .insert(remoteMonitoring)
            .then(id => res.status(200).json(id[0]))
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar monitoramento remoto')
            })
    }

    const savePicture = async(req, res) => {

        const storage = multer.diskStorage({ // Objeto para configurar a pasta de salvamento e o nome 
            destination: function(req, file, callback) {
                callback(null, './_remoteMonitoringPictures') // Pasta de destino
            },
            filename: function(req, file, callback) {
                callback(null, `${Date.now()}_${file.originalname}`)
            }
        })

        const upload = multer({ storage }).single('remoteMonitoringPicture')

        upload(req, res, err => {
            if (err) {
                return res.end('Erro ao fazer upload da(s) imagem(s)')
            }

            console.log(req.body)

            let remoteMonitoringPicture = {
                imageURL: req.file.filename,
                remoteMonitoringId: req.body.remoteMonitoringId
            }

            app.db('remote-monitoring-pictures')
                .insert(remoteMonitoringPicture)
                .then(_ => res.status(204).send())
                .catch(err => {
                    console.log(err)
                    res.status(500).send(err)
                })

        })

    }

    return { save, savePicture }
}