const app = require('express')()
const consign = require('consign')
const port = 500

app.db = require('./config/db.js')

consign()
    .then('./config/middlewares.js')
    .into(app)


app.get('/teste', (req, res) => res.send('Isso aqui está testado!'))

app.get('/teste-db', async (req, res) => {
    await app.db('alunos')
        .then(alunos => res.send(alunos))
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})

app.listen(port, () => {
    console.log(`Server running in port ${port}`)
})