module.exports = app => {
    app.post('/signup', app.api.user.save)

    app.post('/complaint', app.api.complaint.save)

    app.post('/visit', app.api.visit.save)

    app.post('/donation', app.api.donation.save)

    app.post('/temporary-home', app.api.temporaryHome.save)

    app.post('/collaborator', app.api.collaborator.save)

    app.post('/veterinary-care', app.api.veterinaryCare.save)

    app.post('/adoption', app.api.adoption.save)

    app.post('/rescue', app.api.rescue.save)

    app.post('/interested-in-adoption', app.api.interestedInAdoption.save)

    app.post('/interested-in-adoption/picture', app.api.interestedInAdoption.savePicture)


}