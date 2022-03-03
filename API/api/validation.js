module.exports = app => {

    const existsOrError = (value, msg) => {
        if (!value) throw msg
        if (Array.isArray(value) && value.length === 0) throw msg
        if (typeof value === 'string' && !value.trim()) throw msg
    }

    const objectIsNull = (object) => {
        if (!object) return true

        if (typeof object == 'object') {
            return Object.keys(object).length == 0
        } else {
            return false
        }
    }

    const isNumber = (value) => {
        return !isNaN(value)
    }

    return { existsOrError, objectIsNull, isNumber }
}