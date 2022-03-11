const multer = require('multer')
const fs = require('fs')
const path = require('path')

module.exports = app => {

    const { showLog, showAndRegisterError } = app.api.commonFunctions
    const { isValidId } = app.api.validation

    const getRemoteMonitoringsByAdoption = async (req, res) => {
        const adoptionId = isValidId(req.params.adoptionId) && req.params.adoptionId
        if (!adoptionId) return res.status(400).send('Não foi possível identificar a adoção!')

        showLog(adoptionId)

        await app.db('remote-monitorings')
            .where({ adoptionId })
            .then(async (remoteMonitorings) => {
                showLog(remoteMonitorings)
                const remoteMonitoringsWithPictures = await getPictures(remoteMonitorings)
                return res.status(200).send(remoteMonitoringsWithPictures)
            })
            .catch(err => {
                showAndRegisterError(err, path.basename(__filename))
                return res.status(500).send(err)
            })
    }

    const getPictures = async (remoteMonitorings) => {
        for (remoteMonitoring of remoteMonitorings) {
            remoteMonitoring.imagesURL = []
            remoteMonitoring.imagesURL = await app.db('remote-monitoring-pictures')
                .where({ remoteMonitoringId: remoteMonitoring.id })
                .then(imageURL => {
                    return imageURL.map(imageURL => imageURL.imageURL)
                })
                .catch(err => {
                    showAndRegisterError(err, path.basename(__filename))
                    showLog('Erro ao obter imagens de monitoramento')
                })
        }

        return remoteMonitorings
    }

    const save = async (req, res) => {
        const { existsOrError, objectIsNull } = app.api.validation

        const remoteMonitoring = !objectIsNull(req.body.remoteMonitoring) && req.body.remoteMonitoring
        if(!remoteMonitoring) return res.status(400).send('Dados do monitoramento remoto não informados!') 
    
        remoteMonitoring.date = new Date()

        try {
            existsOrError(remoteMonitoring.date, 'Data não informada!')
            existsOrError(remoteMonitoring.observations, 'Observações não informadas!')
            existsOrError(remoteMonitoring.adoptionId, 'Adoção não informada!')
        } catch (err) {
            return res.status(400).send(err)
        }

        await app.db('remote-monitorings')
            .insert(remoteMonitoring)
            .then(id => res.status(200).json(id[0]))
            .catch(err => {
                showAndRegisterError(err, path.basename(__filename))
                return res.status(500).send('Erro ao cadastrar monitoramento remoto')
            })
    }

    const savePicture = async (req, res) => {

        const storage = multer.diskStorage({ // Objeto para configurar a pasta de salvamento e o nome 
            destination: function (req, file, callback) {
                callback(null, './_remoteMonitoringPictures') // Pasta de destino
            },
            filename: function (req, file, callback) {
                callback(null, `${Date.now()}_${file.originalname}`)
            }
        })

        const upload = multer({ storage }).single('remoteMonitoringPicture')

        upload(req, res, err => {
            if (err) {
                return res.end('Erro ao fazer upload da(s) imagem(s)')
            }

            showLog(req.body)

            let remoteMonitoringPicture = {
                imageURL: req.file.filename,
                remoteMonitoringId: req.body.remoteMonitoringId
            }

            app.db('remote-monitoring-pictures')
                .insert(remoteMonitoringPicture)
                .then(_ => res.status(204).send())
                .catch(err => {
                    showAndRegisterError(err, path.basename(__filename))
                    return res.status(500).send(err)
                })
        })
    }

    const removeRemoteMonitoring = async (req, res) => {
        const idRemoteMonitoring = req.params.id ? req.params.id : res.status(400).send('Identificação do monitoramento remoto não informada')

        let remoteMonitoringsId = idRemoteMonitoring.split(',')
        showLog(remoteMonitoringsId)

        remoteMonitoringsId.forEach(async (idRemoteMonitoring) => {
            await app.db('remote-monitorings')
                .where({ id: idRemoteMonitoring })
                .del()
                .then(_ => showLog(`Monitoramento remoto de id: ${idRemoteMonitoring} deletado`))
                .catch(err => {
                    showAndRegisterError(err, path.basename(__filename))
                    return res.status(500).send('Ocorreu um erro ao deletar monitoramento remoto')
                })

            await app.db('remote-monitoring-pictures')
                .select('imageURL')
                .where({ remoteMonitoringId: idRemoteMonitoring })
                .then(async imagesURL => {
                    if (imagesURL.length > 0) {
                        await deleteSavedFiles(imagesURL)
                    }
                })
                .catch(err => {
                    showAndRegisterError(err, path.basename(__filename))
                    showLog('Erro ao remover imagens anteriores')
                })

            await app.db('remote-monitoring-pictures')
                .select('imageURL')
                .where({ remoteMonitoringId: idRemoteMonitoring })
                .del()
                .then(_ => showLog('Registros deletados!'))
                .catch(err => {
                    showAndRegisterError(err, path.basename(__filename))
                    showLog('Erro ao remover registros anteriores')
                })
        })

        res.status(200).send('Monitoramento remoto removido com sucesso!')
    }

    const deleteSavedFiles = async (imagesURL) => {
        for (imageURL of imagesURL) {
            await deleteFile(`${__dirname}/../_remoteMonitoringPictures/${imageURL.imageURL}`)
        }
    }

    const deleteFile = (filePath) => {
        fs.unlink(filePath, (err) => {
            if (!err) {
                showLog('Arquivo deletado com sucesso!');
            } else {
                showAndRegisterError(err, path.basename(__filename))
                showLog('Erro ao deletar arquivo.');
            }
        })
    }

    return { getRemoteMonitoringsByAdoption, save, savePicture, removeRemoteMonitoring }
}