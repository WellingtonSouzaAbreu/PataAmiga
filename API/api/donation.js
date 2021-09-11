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
        const donationstate = req.params.state == 'true' ? 1 : 0

        await app.db('donations')
            .update({ donationReceived: donationstate })
            .where({ id: req.params.id })
            .then(_ => res.status(200).send())
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const numberOfDonationsReceived = async (req, res) => {
        const donationTypes = ['money', 'portion', 'medicines', 'others']

        let donationsReceived = await mapDonationTypes(donationTypes)

        donationsReceivedObject = await donationsReceived.reduce((total, current) => {
            return { ...total, ...current } // Transforma array em objeto
        }, {})
        await res.status(200).send(donationsReceivedObject)
    }

    const mapDonationTypes = async (donationTypes) => {
        return await Promise.all(donationTypes.map(async donationType => {
            const count = await countDonationType(donationType)
            return { [donationType]: count }
        }))
    }

    const countDonationType = async (donationType) => {
        const count = await app.db('donations')
            .count(`donationType as ${donationType}`)
            .where({ donationType: donationType })
            .then(([count]) => count[donationType])
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })

        return count
    }

    const save = async (req, res) => {
        const { existsOrError } = app.api.validation

        const userId =/*  req.user.id  */ 1
        let donation = req.body
        donation.date = convertDate(donation.date)

        if (!donation.donationType) donation.donationType = 'others'

        try {
            existsOrError(donation, 'Dados da doação não informados')
        } catch (err) {
            return res.status(400).send()
        }


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

    const convertDate = (date) => {
        return new Date(new Date((date.split('Z')[0])).getTime() - 14400000) 
    }

    const removeDonation = async (req, res) => {
        const idDonation = req.params.id ? req.params.id : res.status(400).send('Identificação da publicação não informada')

        let donationsId = idDonation.split(',')

        donationsId.forEach(async (idDonation) => {
            await app.db('donations')
                .where({ id: idDonation })
                .del()
                .then(_ => console.log(`Doação de id: ${idDonation} deletada`))
                .catch(err => {
                    console.log(err)
                    res.status(500).send('Ocorreu um erro ao deletar doação')
                })
        })

        res.status(200).send('Doações removidas com sucesso!')
    }


    return { getDonations, changeStateOfDonation, numberOfDonationsReceived, save, removeDonation }
}