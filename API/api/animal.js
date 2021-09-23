const multer = require('multer')

module.exports = app => {

    const getAllDataOfAnimalById = async (req, res) => {
        const idAnimal = req.params.id ? req.params.id : res.status(400).send('Identificação do animal não informada')

        await app.db('animals')
            .where({ id: idAnimal })
            .first()
            .then(async (animal) => {
                animal.imagesURL = await getAllAnimalPictures(idAnimal)
                animal.veterinaryCare = await getVeterinaryCare(idAnimal)
                animal.rescue = await getRescue(idAnimal)
                animal.extraInfo = await getExtraInfo(idAnimal)
                console.log(animal)
                res.status(200).send(animal)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const getVeterinaryCare = async (idAnimal) => {
        return await app.db('veterinary-cares')
            .where({ animalId: idAnimal })
            .then(async veterinaryCare => {
                // veterinaryCare.costsVeterinaries = await getCostsVeterinaries(veterinaryCare.id) TODO // Os custos serão ancorados ao relatório
                return veterinaryCare
            })
            .catch(err => {
                console.log(err)
                throw err
            })
    }

    /* const getCostsVeterinaries = async (veterinaryCareId) => {
        return await app.db('costs-veterinaries')
            .where({ veterinaryCareId: veterinaryCareId })
            .then(costsVeterinaries => costsVeterinaries)
            .catch(err => {
                console.log(err)
                throw err
            })
    } */

    const getRescue = async (animalId) => {
        return await app.db('rescues')
            .where({ animalId: animalId })
            .first()
            .then(rescue => rescue)
            .catch(err => {
                console.log(err)
                throw err
            })
    }

    const getExtraInfo = async (animalId) => {
        let extraInfo = {}
        extraInfo.adopted = await app.db('adoptions')
            .where({ animalId: animalId })
            .first()
            .then(adopted => adopted ? true : false)
            .catch(err => console.log(err))

        extraInfo.temporaryHome = await app.db('temporary-homes')
            .where({ animalId: animalId })
            .first()
            .then(temporaryHome => temporaryHome ? true : false)
            .catch(err => console.log(err))

        extraInfo.availableToAdoption = !extraInfo.adopted// TODO Como saber se ele é disponível para a adpção

        return extraInfo
    }

    const getAnimalById = async (req, res) => {
        const idAnimal = req.params.id ? req.params.id : res.status(400).send('Identificação do animal não informada')

        await app.db('animals')
            .where({ id: idAnimal })
            .first()
            .then(async (animal) => {
                animal.imagesURL = await getAllAnimalPictures(idAnimal)
                console.log(animal)
                res.status(200).send(animal)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const getAllAnimalPictures = async (idAnimal) => {
        return await app.db('animal-pictures')
            .select('id', 'imageURL')
            .where({ animalId: idAnimal })
            .then(imagesURL => imagesURL)
            .catch(err => {
                console.log(err)
                throw err
            })
    }

    const getAnimals = async (req, res) => {
        await app.db('animals')
            .select('id', 'name', 'breed', 'specie', 'aproximateAge', 'sex')
            .then(async (animals) => {
                // animals = JSON.parse(JSON.stringify(animals))
                animals = await getAnimalMainPicture(animals)
                res.status(200).send(animals)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
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
        const { existsOrError, objectIsNull } = app.api.validation

        console.log(req.body)

        const animal = await objectIsNull(req.body.animal) ? res.status(400).send('Dados do animal não informados') : req.body.animal
        const veterinaryCare = await objectIsNull(req.body.veterinaryCare) ? res.status(400).send('Dados do cuidado veterinário não informados') : req.body.veterinaryCare

        console.log(veterinaryCare)
        try {
            /* existsOrError(animal.color, 'Cor não informada')
            existsOrError(animal.name, 'Nome não informado')
            existsOrError(animal.aproximateAge, 'Idade aproximada não informada')
            existsOrError(animal.sex, 'Sexo não informado')
            existsOrError(animal.specie, 'Espécie não informado')
            existsOrError(animal.breed, 'Raça não informado') */

            existsOrError(veterinaryCare.dateOfVeterinaryCare, 'Data do cuidado veterinário não informado')
            existsOrError(veterinaryCare.totalCostOfTreatment, 'Custo total do cuidado veterinário não informado')
            existsOrError(veterinaryCare.veterinaryName, 'Nome do veterinário não informado')
        } catch (err) {
            return res.status(400).send(err)
        }

        const animalId = 1/* await app.db('animals')
            .insert(animal)
            .then(id => {
                console.log('Success => Animal veterinário')
                return id[0]
            })
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar animal')
            }) */

        veterinaryCare.dateOfVeterinaryCare = veterinaryCare.dateOfVeterinaryCare.split('Z')[0]

        await app.db('veterinary-cares')
            .insert({...veterinaryCare, animalId: animalId})
            .then(_ => console.log('Success => Cuidado veterinário'))
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar cuidado veterinário')
            })

        // await res.status(200).json(animalId)
        await res.status(200).send()
    }

    const savePicture = async (req, res) => {

        const storage = multer.diskStorage({ // Objeto para configurar a pasta de salvamento e o nome 
            destination: function (req, file, callback) {
                callback(null, './_animalPictures') // Pasta de destino
            },
            filename: function (req, file, callback) {
                callback(null, `${Date.now()}_${file.originalname}`)
            }
        })

        const upload = multer({ storage }).single('animalPicture')

        upload(req, res, err => {
            if (err) {
                return res.end('Erro ao fazer upload da(s) imagem(s)')
            }

            console.log(req.body)
            console.log(req.file)

            let animalPicture = {
                imageURL: req.file.filename,
                animalId: req.body.animalId
            }

            app.db('animal-pictures')
                .insert(animalPicture)
                .then(_ => res.status(204).send())
                .catch(err => {
                    console.log(err)
                    res.status(500).send(err)
                })
        })
    }

    const removeAnimal = async (req, res) => {
        const idAnimal = req.params.id ? req.params.id : res.status(400).send('Identificação do animal não informada')

        let animalsId = idAnimal.split(',')

        animalsId.forEach(async (idAnimal) => {
            await app.db('collaborators')
                .where({ id: idAnimal })
                .del()
                .then(_ => console.log(`Animal de id: ${idAnimal} deletado`))
                .catch(err => {
                    console.log(err)
                    res.status(500).send('Ocorreu um erro ao deletar animal')
                })
        })

        res.status(200).send('Animal removido com sucesso!')
    }

    return { getAnimalById, getAllDataOfAnimalById, getAnimals, save, savePicture, removeAnimal }
}