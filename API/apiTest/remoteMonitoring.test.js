const { app, request } = require('./../apiTestConfig/requires.js')
const { remoteMonitoring, errorMessageIdentifier } = require('./../apiTestConfig/dataTest.js')

describe('Testing api/remoteMonitoring', () => {
    test('Should return array containing remote monitorings with pictures URL by idAdoption and statusCode=200 | route: GET /remote-monitoring/:idAdoption', async () => {
        const res = await request(app).get('/remote-monitoring/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body[0]).toEqual({ ...remoteMonitoring, id: 1, imagesURL: ['test.txt'] })
    })

    test('Should return error message when send invalid idAdoption and statusCode=200 | route: GET /remote-monitoring/:idAdoption', async () => {
        const res = await request(app).get('/remote-monitoring/1x')
        expect(res.statusCode).toEqual(400)
        expect(res.error.text).toMatch(errorMessageIdentifier)
    })

    test('Should return idRemoteMonitoring when send valid datas and statusCode=200 | route POST /remote-monitoring', async () => {
        const res = await request(app)
            .post('/remote-monitoring')
            .send({
                remoteMonitoring: { ...remoteMonitoring }
            })

        expect(res.statusCode).toEqual(200)
        expect(res.body).toBeGreaterThan(0)
    })

    test('Should return error message when not send remoteMonitoring object and statusCode=400 | route POST /remote-monitoring', async () => {
        const res = await request(app)
            .post('/remote-monitoring')
            .send({
                noRemoteMonitoring: { ...remoteMonitoring }
            })

        expect(res.statusCode).toEqual(400)
        expect(res.error.text).toMatch(errorMessageIdentifier)
    })

    test('Should return error message when send invalid observations and statusCode=400 | route POST /remote-monitoring', async () => {
        const res = await request(app)
            .post('/remote-monitoring')
            .send({
                remoteMonitoring: { ...remoteMonitoring, observations: '' }
            })

        expect(res.statusCode).toEqual(400)
        expect(res.error.text).toMatch(errorMessageIdentifier)
    })

    test('Should return error message when send invalid adoptionId and statusCode=400 | route POST /remote-monitoring', async () => {
        const res = await request(app)
            .post('/remote-monitoring')
            .send({
                remoteMonitoring: { ...remoteMonitoring, adoptionId: '' }
            })

        expect(res.statusCode).toEqual(400)
        expect(res.error.text).toMatch(errorMessageIdentifier)
    })
})