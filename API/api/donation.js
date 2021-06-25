const user = require("./user")

module.exports = app => {

    const save = async (req, res) => {
        const { existsOrError } = app.api.validation

        const userId = req.user.id // Passport
        let donation = req.body
        console.log(req.body)

        try {
            existsOrError(donation, 'Dados da doação não informados')
        } catch (err) {
            return res.status(400).send()
        }

        donation.dateTime = new Date()

        await app.db('users')
            .select('name', 'cellNumber')
            .where({ id: userId })
            .then(([userData]) => donation = { ...donation, ...userData })
            .catch(err => console.log('Erro ao consultar dados do usuário'))

        try {
            // existsOrError(donation.donationType, 'Tipo de doação não informado')
            existsOrError(donation.name, 'Nome do doador não informado')
            existsOrError(donation.cellNumber, 'Celular do doador não informado')
            existsOrError(donation.dateTime, 'Data e hora não informada')
            existsOrError(donation.description, 'Descrição não informada')

            // donation.donationType == 'assets' ? existsOrError(donation.description, 'Descrição não infomada') : existsOrError(donation.specimenValue, 'Valor em espécime não infomado')

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


    return { save }
}