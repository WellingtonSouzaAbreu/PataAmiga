const multer = require('multer')

module.exports = app => {

    const getAnimals = async (req, res) => {
        await app.db('animals')
            .select('id', 'name', 'aproximateAge', 'sex')
            .then(async (animals) => {
                animals = JSON.parse(JSON.stringify(animals))
                animals = await getAnimalPictures(animals)
                res.status(200).send(animals)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const getAnimalPictures = async (animals) => {
        for (animal of animals) {
            await app.db('animal-pictures')
                .select('imageURL')
                .where({animalId: animal.id})
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

    return { getAnimals, save, savePicture }
}