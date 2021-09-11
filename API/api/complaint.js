module.exports = app => {

    const getComplaints = async (req, res) => {
        await app.db('complaints')
            .then(complaints => res.status(200).send(complaints))
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

    const changeStateOfComplaint = async (req, res) => {
        const id = req.params.id
        const verified = req.params.state == 'true' ? 1 : 0

        console.log(id + ' - ' + verified)

        await app.db('complaints')
            .update({ verified: verified })
            .where({ id: id })
            .then(_ => res.status(200).send())
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

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

    const removeComplaint = async (req, res) => {
        const idComplaint = req.params.id ? req.params.id : res.status(400).send('Identificação da denúncia não informada')

        let complaintsId = idComplaint.split(',')

        complaintsId.forEach(async (idComplaint) => {
            await app.db('complaints')
                .where({ id: idComplaint })
                .del()
                .then(_ => console.log(`Denúncia de id: ${idComplaint} deletada`))
                .catch(err => {
                    console.log(err)
                    res.status(500).send('Ocorreu um erro ao deletar Denúncia')
                })
        })

        res.status(200).send('Denúncias removidas com sucesso!')
    }

    return { getComplaints, changeStateOfComplaint, save, removeComplaint }
}