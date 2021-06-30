module.exports = app => {

    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.user.signin)

    app.route('/user/:id')
        // .all(app.config.passport.authenticate())  // Setar isso para todas as requisições que necessitam de validação
        .get(app.api.user.getUserById)
        .put(app.api.user.save)

    app.post('/validate-token', app.api.user.validateToken)

    app.route('/complaint')
        .get(app.api.complaint.getComplaints)
        .post(app.api.complaint.save)

    app.post('/visit', app.api.visit.save)

    app.route('/donation')
        .all(app.config.passport.authenticate())
        .post(app.api.donation.save)

    app.route('/temporary-home')
        .get(app.api.temporaryHome.getTemporaryHomes)
        .post(app.api.temporaryHome.save)

    app.route('/collaborator')
        .get(app.api.collaborator.getCollaborators)
        .post(app.api.collaborator.save)

    app.post('/veterinary-care', app.api.veterinaryCare.save)

    app.route('/adoption')
        .get(app.api.adoption.getAdoptions)
        .post(app.api.adoption.save)

    app.route('/adoption/animal-select')
        // .all(app.config.passport.authenticate())
        .get(app.api.adoption.getAnimalsByUserAdoption)

    app.route('/adoption/number-by-user')
        // .all(app.config.passport.authenticate())
        .get(app.api.adoption.getNumberOfAdoptionsByUser)

    app.route('/rescue/:animalId')
        .get(app.api.rescue.getRescue)
        .post(app.api.rescue.save)

    app.route('/interesteds-in-adoption/:animalId')
        .all(app.config.passport.authenticate())
        .get(app.api.interestedInAdoption.getInterestedsInAdoption)
        .post(app.api.interestedInAdoption.save)

    app.post('/interested-in-adoption/picture', app.api.interestedInAdoption.savePicture)

    app.route('/animal')
        //.all(app.config.passport.authenticate()) // Setar isso para todas as requisições que necessitam de validação
        .get(app.api.animal.getAnimals)
        .post(app.api.animal.save)

    app.route('/animal/:id')
        .get(app.api.animal.getAnimalById)

    app.route('/animal/:id/all-data')
        .get(app.api.animal.getAllDataOfAnimalById)

    app.post('/animal/picture', app.api.animal.savePicture)

    app.post('/remote-monitoring', app.api.remoteMonitoring.save)

    app.post('/remote-monitoring/picture', app.api.remoteMonitoring.savePicture)

    app.route('/publication')
        .get(app.api.publication.getPublications)
        .post(app.api.publication.save)

    app.get('/publication/event', app.api.publication.getEvents)

    app.get('/publication/done', app.api.publication.getDones)

    app.route('/publication/:id')
        .get(app.api.publication.getPublicationById)

    app.post('/publication/picture', app.api.publication.savePicture)
}