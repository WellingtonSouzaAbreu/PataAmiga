const user = require("./user")

module.exports = app => {

    const save = async (req, res) => {
        const {existsOrError} = app.api.validation

        // variáveis vindas pelo header ficam low case
        const userId = req.headers.userid ? req.headers.userid : res.status(400).send('Doador não informado')
        let donation = req.body.donation ? req.body.donation : res.status(400).send('Dados da doação não informados')
        donation.dateTime = new Date()

        await app.db('users')
            .select('name', 'cellNumber')
            .where({ id: userId })
            .then(([userData]) => donation = { ...donation, ...userData })
            .catch(err => console.log('Erro ao consultar dados do usuário'))

        try {
            existsOrError(donation.donationType, 'Tipo de doação não informado')
            existsOrError(donation.name, 'Nome do doador não informado')
            existsOrError(donation.cellNumber, 'Celular do doador não informado')
            existsOrError(donation.dateTime, 'Data e hora não informada')

            donation.donationType == 'assets' ? existsOrError(donation.description, 'Descrição não infomada') : existsOrError(donation.specimenValue, 'Valor em espécime não infomado')

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