const getRandomId = () => {
    return Math.ceil(Math.random() * 100000 + 1)
}

const visit = {
    report: 'Tudo tranquilo',
    date: '2021-02-02T03:00:00.000Z',
    adoptionId: 1
}

const veterinaryCare = {
    needOfHospitalization: 1, 
    needOfMedication: 1,
    dateOfVeterinaryCare: '2021-11-20',
    totalCostOfTreatment: 500,
    anamnese: 'Tudo ok',
    veterinaryName: 'Lucas',
    animalId: 1
}

module.exports = { veterinaryCare, visit }