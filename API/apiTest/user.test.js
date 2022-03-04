const { app, request } = require('./../apiTestConfig/requires.js')
const { existsOrError, objectIsNull, isNumber } = app.api.validation

const { token, user, getRandomEmail, getRandomCellNumber } = require('./../apiTestConfig/dataTest.js')

describe('Testing api/user.js', () => {
    test('Should return a empty object and statusCode=204 | route: POST /signup', async () => {
        const res = await request(app)
            .post('/signup')
            .send({
                user: {
                    ...user,
                    password: '10101010',
                    confirmPassword: '10101010',
                    email: getRandomEmail(),
                    cellNumber: getRandomCellNumber()
                },
            });

        expect(res.statusCode).toEqual(204)
        expect(res.body).toEqual({})
    })

    test('Should return a user data, token and statusCode=200 | route: POST /signin', async () => {
        const res = await request(app)
            .post('/signin')
            .send({
                cellNumber: user.cellNumber,
                password: '10101010',
            });

        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual({
            id: 1,
            name: user.name,
            cellNumber: user.cellNumber,
            token: token.split(' ')[1]
        })
    })

    /* test('Should return am empty object, changing houseNumber of 5555 to 1000 and statusCode=204 | route PUT /user', async () => {
        const res = await request(app)
            .put('/user/1')
            .send({
                user: {
                    ...user,
                    password: '10101010',
                    confirmPassword: '10101010',
                    houseNumber: 1000
                }
            }).set('Authorization', token);

        const resAfterUpdate = await request(app)
            .get('/user/1')

        await request(app) // Recovery tuple to default
            .put('/user/1')
            .send({
                user: {
                    ...user,
                    password: '10101010',
                    confirmPassword: '10101010',
                    houseNumber: 5555
                }
            }).set('Authorization', token);

        expect(res.statusCode).toEqual(204)
        expect(res.body).toEqual({})
        expect(resAfterUpdate.body).toEqual({ ...user, id: 1, houseNumber: 1000 })
    }) */

    test('Should return user select optins statusCode=200 | route: GET /user/select-options', async () => {
        const res = await request(app).get('/user/select-options?userName=Adm')

        expect(res.statusCode).toEqual(200)
        expect(res.body[0]).toEqual({ id: 1, label: `${user.name} - ${user.cellNumber}` })
    })

    test('Should return user data by id and statusCode=200 | route: GET /user/:id', async () => {
        const res = await request(app)
            .get('/user/1')
            .set('Authorization', token);

        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual({ ...user, id: 1 })
    })
})