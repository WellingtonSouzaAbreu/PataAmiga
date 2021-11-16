import moment from 'moment'
import { Alert } from 'react-native'

const formatDate = (date) => {
    return moment(date).format('DD/MM/yyyy')
}

const formatHour = (hour) => {
    return moment(hour).format('HH:mm')
}

const showAlert = (title, message, buttons) => {
    Alert.alert(title, message, buttons)
}

export { formatDate, formatHour, showAlert }