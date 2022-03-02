const getRandomId = () => {
    return Math.ceil(Math.random() * 100000 + 1)
}

const visit = {
    id: getRandomId(),
    report: 'Tudo tranquilo',
    date: '2021-02-02T03:00:00.000Z',
    adoptionId: 1
}

module.exports = { visit }