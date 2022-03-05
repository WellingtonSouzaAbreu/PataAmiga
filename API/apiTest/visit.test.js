const { request, app } = require('../apiTestConfig/requires.js')

const { visit } = require('../apiTestConfig/dataTest.js')

describe('Testing api/visit.js', () => {
    test('Should return visits by adoption and statusCode=200 | route: GET /visit/:adoptionId', async () => {
        const res = await request(app).get('/visit/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body[0]).toEqual({ ...visit, id: 1 })
    })

    test('Should return error message when send invalid adoptionId and statusCode=400 | route: GET /visit/:adoptionId', async () => {
        const res = await request(app).get('/visit/invalid')
        expect(res.statusCode).toEqual(400)
        expect(res.error.text).toEqual('Não foi possível identificar a adoção!')
    })

    test('Should return an empty object and statusCode=204 | route: POST /visit', async () => {
        const res = await request(app)
            .post('/visit')
            .send({
                visit: { ...visit }
            })

        expect(res.statusCode).toEqual(204)
        expect(res.body).toEqual({})
    })

    test('Should return error message and statusCode=400 | route: POST /visit', async () => {
        const res = await request(app)
            .post('/visit')
            .send({
                noVisit: { ...visit }
            })

        expect(res.statusCode).toEqual(400)
        expect(res.error.text).toEqual('Dados da visita não informados!')
    })

    test('Should return error message when send invalid report and statusCode=400 | route: POST /visit', async () => {
        const res = await request(app)
            .post('/visit')
            .send({
                visit: { ...visit, report: '' }
            })

        expect(res.statusCode).toEqual(400)
        expect(res.error.text).toEqual('Relatório não informado!')
    })

    test('Should return error message when send invalid adoptionId and statusCode=400 | route: POST /visit', async () => {
        const res = await request(app)
            .post('/visit')
            .send({
                visit: { ...visit, adoptionId: '' }
            })

        expect(res.statusCode).toEqual(400)
        expect(res.error.text).toEqual('Adoção não informada!')
    })

    test('Should return error message when send invalid date and statusCode=400 | route: POST /visit', async () => {
        const res = await request(app)
            .post('/visit')
            .send({
                visit: { ...visit , date: ''}
            })

        expect(res.statusCode).toEqual(400)
        expect(res.error.text).toEqual('Data não informada!')
    })

    test('Should return an empty object and statusCode=204  | route: DELETE /visit/:id', async () => {
        const res = await request(app).delete('/visit/1')
        expect(res.statusCode).toEqual(204)
        expect(res.body).toEqual({})

        await request(app) //Recovery deleted adoption
            .post('/visit')
            .send({
                visit: { ...visit, id: 1 }
            })
    })
})