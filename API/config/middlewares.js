const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors({
        origin: '*'
    }))
    app.use('/animal-pictures', express.static('./_animalPictures'))
    app.use('/publication-pictures', express.static('./_publicationPictures'))
}