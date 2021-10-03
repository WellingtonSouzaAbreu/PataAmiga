const multer = require('multer')

module.exports = app => {

    const getAllDataOfAnimalById = async (req, res) => {
        const idAnimal = req.params.id ? req.params.id : res.status(400).send('Identificação do animal não informada')

        await app.db('animals')
            .where({ id: idAnimal })
            .first()
            .then(async (animal) => {
                animal.aproximateAge = await estimateAge(animal.dateOfBirth)
                animal.imagesURL = await getAllAnimalPictures(idAnimal)
                animal.veterinaryCare = await getVeterinaryCare(idAnimal)
                animal.rescue = await getRescue(idAnimal)
                animal.extraInfo = await getExtraInfo(idAnimal)
                // console.log(animal)
                res.status(200).send(animal)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const estimateAge = (dateOfBirth) => {
        let differenceInMonths = parseInt((Date.parse(new Date()) - Date.parse(dateOfBirth)) / 1000 / 60 / 60 / 24 / 30)

        console.log(differenceInMonths) //TODO

        if(differenceInMonths <= 1){
            return  'Alguns dias'
        }

        if(differenceInMonths > 1 && differenceInMonths <= 12){
            return `${differenceInMonths} meses`
        }

        if(parseInt(differenceInMonths > 12) == 1){
            return `1 ano`
        }else{
            return `${parseInt(differenceInMonths / 12)} anos`
        }
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
                animal.aproximateAge = await estimateAge(enimal.dateOfBirth)
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
            .select('id', 'name', 'breed', 'specie', 'dateOfBirth', 'sex')
            .then(async (animals) => {
                // animals = JSON.parse(JSON.stringify(animals))
                animals = await estimateAllAges(animals)
                animals = await getAnimalMainPicture(animals)
                console.log(animals)
                res.status(200).send(animals)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const estimateAllAges = async(animals) => {
        for(animal of animals){
            animal.aproximateAge = await estimateAge(animal.dateOfBirth)
        }
            return animals
    }

    const getAnimalMainPicture = async (animals) => {
        for (animal of animals) {
            console.log(animal.id)
            console.log(animal)
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
        const rescue = await objectIsNull(req.body.rescue) ? res.status(400).send('Dados do resgate não informados') : req.body.rescue

        console.log(veterinaryCare)
        try {
            existsOrError(animal.name, 'Nome não informado')
            existsOrError(animal.color, 'Cor não informada')
            existsOrError(animal.specie, 'Espécie não informado')
            existsOrError(animal.dateOfBirth, 'Data de nascimento não informada')
            existsOrError(animal.breed, 'Raça não informado')
            existsOrError(animal.sex, 'Sexo não informado')

            existsOrError(veterinaryCare.dateOfVeterinaryCare, 'Data do cuidado veterinário não informado')
            existsOrError(veterinaryCare.totalCostOfTreatment, 'Custo total do cuidado veterinário não informado')
            existsOrError(veterinaryCare.veterinaryName, 'Nome do veterinário não informado')
        } catch (err) {
            return res.status(400).send(err)
        }

        animal.dateOfBirth = new Date(animal.dateOfBirth)

        const animalId = await app.db('animals')
            .insert(animal)
            .then(id => {
                console.log('Success => Animal')
                return id[0]
            })
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar animal')
            })

        veterinaryCare.dateOfVeterinaryCare = new Date(veterinaryCare.dateOfVeterinaryCare)

        const veterinaryCareId = await app.db('veterinary-cares')
            .insert({ ...veterinaryCare, animalId: animalId })
            .then(id => {
                console.log('Success => Cuidado veterinário')
                return id[0]
            })
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar cuidado veterinário')
            })

        rescue.dateOfRescue = new Date(rescue.dateOfRescue)

        await app.db('rescues')
            .insert({ ...rescue, veterinaryCareId, animalId })
            .then(id => console.log('Success => Resgate'))
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar resgate')
            })

        await res.status(200).json(animalId)
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
        console.log(animalsId)

        animalsId.forEach(async (idAnimal) => {
            await app.db('animals')
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