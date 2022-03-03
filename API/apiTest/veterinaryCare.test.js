const { request, app } = require('../apiTestConfig/requires.js')

const { veterinaryCare } = require('./../apiTestConfig/dataTest.js')

describe('Testing api/visit.js', () => {
    test('Should return an empty object and statusCode=204 | route: POST /veterinay-care', async () => {
        const res = await request(app)
            .post('/veterinary-care')
            .send({
                veterinaryCare: { ...veterinaryCare }
            })

        expect(res.body).toEqual({})
        expect(res.statusCode).toEqual(204)
    })

    test('Should return am empty object and statusCode=204 | route PUT /veterinary-care', async() => {
        const res = await request(app)
            .put('/veterinary-care')
            .send({
                veterinaryCare: { ...veterinaryCare, id: 1, totalCostOfTreatment: 1000 }
            })

        expect(res.body).toEqual({})
        expect(res.statusCode).toEqual(204)

        await request(app) // Recovery tuple to default
            .put('/veterinary-care')
            .send({
                veterinaryCare: { ...veterinaryCare, id: 1, totalCostOfTreatment: 500 }
            })
    })

    test('Should return an empty object and statusCode=204  | route: DELETE /veterinay-care/:id', async () => {
        const res = await request(app).delete('/veterinary-care/1')
        expect(res.body).toEqual({})
        expect(res.statusCode).toEqual(204)

        await request(app) //Recovery deleted adoption
            .post('/veterinary-care')
            .send({
                veterinaryCare: { ...veterinaryCare, id: 1 }
            })
    })
})