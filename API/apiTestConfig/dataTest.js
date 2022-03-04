const getRandomId = () => {
    return Math.ceil(Math.random() * 1000000 + 1)
}

const getRandomEmail = () => {
    return `${Math.ceil(Math.random() * 1000000 + 1)}@gmail.com`
}

const getRandomCellNumber = () => {
    return `${Math.ceil(Math.random() * 10000009999 + 100000000)}`
}

const token = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFkbWluaXN0cmFkb3IiLCJjZWxsTnVtYmVyIjoiQWRtaW4ifQ.FVUUYnkNYvQYEuF8HsbdzG9O1ylfMYx3jndD80U0GQI'

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

module.exports = { getRandomEmail,getRandomCellNumber, token, user, veterinaryCare, visit }