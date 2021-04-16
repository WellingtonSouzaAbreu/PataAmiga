const app = require('express')()
const consign = require('consign')
const port = 500

app.db = require('./config/db.js')

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(port, () => {
    console.log(`Server running in port ${port}`)
})