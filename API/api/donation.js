const user = require("./user")

module.exports = app => {

    const getDonations = async (req, res) => {
        await app.db('donations')
            .then(donations => res.status(200).send(donations))
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const changeStateOfDonation = async (req, res) => {

        await app.db('donations')
            .update({donationReceived: !!req.params.state})
            .where({id: req.params.id})
            .then(_ => res.status(200).send())
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const save = async (req, res) => {
        const { existsOrError } = app.api.validation

        const userId =/*  req.user.id  */ 1
        let donation = req.body

        if (!donation.donationType) donation.donationType = 'others'

        try {
            existsOrError(donation, 'Dados da doação não informados')
        } catch (err) {
            return res.status(400).send()
        }

        donation.date = new Date()

        if (!donation.cellNumber || !donation.name) {
            await app.db('users')
                .select('name', 'cellNumber')
                .where({ id: userId })
                .then(([userData]) => donation = { ...donation, ...userData })
                .catch(err => console.log('Erro ao consultar dados do usuário'))
        }

        try {
            // existsOrError(donation.donationType, 'Tipo de doação não informado')
            existsOrError(donation.name, 'Nome do doador não informado')
            existsOrError(donation.cellNumber, 'Celular do doador não informado')
            existsOrError(donation.date, 'Data não informada')
            existsOrError(donation.description, 'Descrição não informada')


        } catch (err) {
            return res.status(400).send(err)
        }

        await app.db('donations')
            .insert(donation)
            .then(_ => res.status(204).send())
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar doação')
            })
    }


    return { getDonations, changeStateOfDonation, save }
}