import moment from 'moment'

const formatDate = (date) => {
    return moment(date).format('DD/MM/yyyy')
}

const formatHour = (hour) => {
    return moment(hour).format('HH:mm')
}

export {formatDate, formatHour}