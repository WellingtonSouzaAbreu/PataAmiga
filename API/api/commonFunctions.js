const chalk = require('chalk')

const showLog = (message, logType) => {
    let customMessage
    if (logType == 'error') {
        customMessage = chalk.red(message)
    } else {
        customMessage = chalk.green(message)
    }
    return console.log(customMessage)
}

const convertStringToDate = (stringDate) => {
    return new Date(stringDate)
}

const convertStringWithCommaToArray = (string) => {
    return string.split(',')
} 

const isNumber = (value) => {
    return !isNaN(value)
}

module.exports = {showLog, convertStringToDate, convertStringWithCommaToArray, isNumber}