const {request, app } = require('../apiTestConfig/requires.js')

const { visit } = require('../apiTestConfig/dataTest.js')

describe('Testing api/visit.js', () => {
    test('Should return an empty object and statusCode=204 | route: POST /visit', async () => {
        const res = await request(app)
            .post('/visit')
            .send({
                visit: { ...visit }
            })

        expect(res.body).toEqual({})
        expect(res.statusCode).toEqual(204)
    })

    test('Should return visits by adoption and statusCode=200 | route: GET /visit/:adoptionId', async () => {
        const res = await request(app).get('/visit/1')
        expect(res.body[0]).toEqual({ ...visit, id: 1 })
        expect(res.statusCode).toEqual(200)
    })

    test('Should return an empty object and statusCode=204  | route: DELETE /visit/:id', async () => {
        const res = await request(app).delete('/visit/1')
        expect(res.body).toEqual({})
        expect(res.statusCode).toEqual(204)

        await request(app) //Recovery deleted adoption
            .post('/visit')
            .send({
                visit: { ...visit, id: 1 }
            })
    })
})