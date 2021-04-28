module.exports = app => {
    app.post('/signup', app.api.user.save)

    app.route('/complaint')
        .get(app.api.complaint.getComplaints)
        .post(app.api.complaint.save)

    app.post('/visit', app.api.visit.save)

    app.post('/donation', app.api.donation.save)

    app.post('/temporary-home', app.api.temporaryHome.save)

    app.post('/collaborator', app.api.collaborator.save)

    app.post('/veterinary-care', app.api.veterinaryCare.save)

    app.post('/adoption', app.api.adoption.save)

    app.post('/rescue', app.api.rescue.save)

    app.post('/interested-in-adoption', app.api.interestedInAdoption.save)

    app.post('/interested-in-adoption/picture', app.api.interestedInAdoption.savePicture)

    app.route('/animal')
        .get(app.api.animal.getAnimals)
        .post(app.api.animal.save)

    app.route('/animal/:id')
        .get(app.api.animal.getById)

    app.post('/animal/picture', app.api.animal.savePicture)

    app.post('/remote-monitoring', app.api.remoteMonitoring.save)

    app.post('/remote-monitoring/picture', app.api.remoteMonitoring.savePicture)

    app.route('/publication')
        .post(app.api.publication.save)

    app.route('/publication/:id')
        .get(app.api.publication.getById)

    app.post('/publication/picture', app.api.publication.savePicture)
}