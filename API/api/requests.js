

module.exports = app => {

    const validateRequestDataForDelete = async (req, target) => {
        const { isValidId } = app.api.validation
        const { convertStringWithCommaToArray } = app.api.commonFunctions

        const idCollaborator = req.params.id && req.params.id
        if (!idCollaborator) throw `Identificação do ${target} não informada!`

        let collaboratorsId = convertStringWithCommaToArray(idCollaborator)

        const validIds = collaboratorsId.filter(id => isValidId(id))
        if (!validIds.length) throw `Não foi informado nenhum identificador válido!`

        return validIds
    }

    const deleteFromDatabase = async (validIds, target, targetTable) => {
        const { showLog, showAndRegisterError } = app.api.commonFunctions 

        const executions = validIds.map(async (id) => {
            return await app.db(targetTable)
                .where({ id })
                .del()
                .then(_ => {
                    showLog(`${target} de id: ${id} deletado!`)
                    return true
                })
                .catch(err => {
                    showAndRegisterError(err, path.basename(__filename))
                    return false
                })
        })

        return executions.reduce((total, current) => total && current, true)
    }

    return { validateRequestDataForDelete, deleteFromDatabase }
}