const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors({
        origin: '*'
    }))
    app.use('/interesteds-pictures', express.static('./_interestedsPictures'))
}