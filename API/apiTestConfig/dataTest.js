const getRandomId = () => {
    return Math.ceil(Math.random() * 1000000 + 1)
}

const getRandomEmail = () => {
    return `${Math.ceil(Math.random() * 1000000 + 1)}@gmail.com`
}

const getRandomCellNumber = () => {
    return `${Math.ceil(Math.random() * 10000009999 + 100000000)}`
}

const errorMessageIdentifier = '!'
const token = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFkbWluaXN0cmFkb3IiLCJjZWxsTnVtYmVyIjoiQWRtaW4ifQ.FVUUYnkNYvQYEuF8HsbdzG9O1ylfMYx3jndD80U0GQI'

const rescue = {
    
}

const temporaryHome = {
    date: '2021-11-20T03:00:00.000Z',
    adopterName: 'Gabriel',
    cellNumber: '69984465997',
    animalId: 1
}

const temporaryHomeWithAnimalUserInfo = {
    adopterName: 'Gabriel',
    animalId: 1,
    animalImageURL: 'gato.jpg',
    animalName: 'Totó',
    aproximateAge: '21 anos',
    availableForAdoption: 1,
    breed: 'Show',
    castrated: 1,
    cellNumber: '69984465997',
    color: 'red',
    date: '2021-11-20T03:00:00.000Z',
    dateOfBirth: '2000-10-10T02:00:00.000Z',
    othersCharacteristics: 'Is cool',
    sex: 'M',
    specie: 'Dog'
}

const user = {
    name: 'Administrador',
    cellNumber: 'Admin',
    // password: '$2a$10$EbrXvE3Xg/JaEEV3v4qMHuufrWxQ3OlE.rW8YWOH.xXQ8pRNy5Ge6',
    address: 'Avenida',
    houseNumber: '5555',
    city: 'Rolim',
    email: 'test@gmail.com',
    phone: '34353435',
    district: 'Centro'
}

const visit = {
    report: 'Tudo tranquilo',
    date: '2021-02-02T03:00:00.000Z',
    adoptionId: 1
}

const veterinaryCare = {
    needOfHospitalization: 1,
    needOfMedication: 1,
    dateOfVeterinaryCare: '2021-11-20T03:00:00.000Z',
    totalCostOfTreatment: 500,
    anamnese: 'Tudo ok',
    veterinaryName: 'Lucas',
    animalId: 1
}

module.exports = {
    getRandomEmail,
    getRandomCellNumber,
    errorMessageIdentifier,
    token,
    rescue,
    temporaryHome,
    temporaryHomeWithAnimalUserInfo,
    user,
    veterinaryCare,
    visit
}