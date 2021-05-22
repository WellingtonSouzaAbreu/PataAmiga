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
            .first()
            .then(async veterinaryCare => {
                veterinaryCare.costsVeterinaries = await getCostsVeterinaries(veterinaryCare.id)
                return veterinaryCare
            })
            .catch(err => {
                console.log(err)
                throw err
            })
    }

    const getCostsVeterinaries = async (veterinaryCareId) => {
        return await app.db('costs-veterinaries')
            .where({ veterinaryCareId: veterinaryCareId })
            .then(costsVeterinaries => costsVeterinaries)
            .catch(err => {
                console.log(err)
                throw err
            })
    }

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
            .select('id', 'breed', 'aproximateAge', 'sex')
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
                .then(imageURL => animal.imageURL = imageURL.imageURL)
                .catch(err => {
                    console.log('Erro o obter imagem do animal')
                    res.status(500).send(err)
                })
        }

        return animals
    }

    const save = async (req, res) => {
        const { existsOrError } = app.api.validation

        const animal = req.body.animal ? req.body.animal : res.status(400).send('Dados do animal não informados')

        console.log('foi request')
        try {
            existsOrError(animal.color, 'Cor não informada')
            animal.name ? existsOrError(animal.name, 'Nome não informado') : existsOrError(animal.surname, 'Apelido não informado')
            existsOrError(animal.aproximateAge, 'Idade aproximada não informada')
            existsOrError(animal.sex, 'Sexo não informado')
        } catch (err) {
            return res.status(400).send(err)
        }

        await app.db('animals')
            .insert(animal)
            .then(id => res.status(200).json(id[0]))
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar animal')
            })
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

    return { getAnimalById, getAllDataOfAnimalById, getAnimals, save, savePicture }
}