module.exports = app => {

    const save = async (req, res) => {
        const { existsOrError } = app.api.validation

        let complaint = req.body.complaint ? req.body.complaint : res.status(400).send('Dados da denúncia não informados')
        complaint.date = new Date()

        try {
            existsOrError(complaint.description, 'Descrição não informado')
            existsOrError(complaint.address, 'Endereço não informada')
            existsOrError(complaint.complaintType, 'Tipo de denúncia não informado')
            existsOrError(complaint.city, 'Cidade não informada')
            existsOrError(complaint.district, 'Bairro não informado')
            existsOrError(complaint.date, 'Data não informada')
        } catch (err) {
            return res.status(400).send(err)
        }

        await app.db('complaints')
            .insert(complaint)
            .then(_ => res.status(204).send())
            .catch(err => {
                console.log(err)
                res.status(500).send('Erro ao cadastrar denúncia')
            })
    }

    return { save }
}