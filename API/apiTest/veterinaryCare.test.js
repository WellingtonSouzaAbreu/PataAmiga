const { request, app } = require('../apiTestConfig/requires.js')

const { veterinaryCare } = require('./../apiTestConfig/dataTest.js')

describe('Testing api/visit.js', () => {
    test('Should return an empty object and statusCode=204 | route: POST /veterinay-care', async () => {
        const res = await request(app)
            .post('/veterinary-care')
            .send({
                veterinaryCare: { ...veterinaryCare }
            })

            expect(res.statusCode).toEqual(204)
        expect(res.body).toEqual({})
    })

    test('Should return am empty object, changing totalCost of 500 to 1000 and statusCode=204 | route PUT /veterinary-care', async () => {
        const res = await request(app)
            .put('/veterinary-care')
            .send({
                veterinaryCare: { ...veterinaryCare, id: 1, totalCostOfTreatment: 1000 }
            })

        const resAfterUpdate = await request(app)
            .get('/veterinary-care/1')

        expect(res.statusCode).toEqual(204)
        expect(res.body).toEqual({})
        expect(resAfterUpdate.body).toEqual({ ...veterinaryCare, id: 1, totalCostOfTreatment: 1000 })

        await request(app) // Recovery tuple to default
            .put('/veterinary-care')
            .send({
                veterinaryCare: { ...veterinaryCare, id: 1, totalCostOfTreatment: 500 }
            })
    })

    test('Should return an empty object and statusCode=204  | route: DELETE /veterinay-care/:id', async () => {
        const res = await request(app).delete('/veterinary-care/1')
        expect(res.statusCode).toEqual(204)
        expect(res.body).toEqual({})

        await request(app) //Recovery deleted adoption
            .post('/veterinary-care')
            .send({
                veterinaryCare: { ...veterinaryCare, id: 1 }
            })
    })
})