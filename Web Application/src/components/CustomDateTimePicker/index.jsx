import react from 'react'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';


import styles from './styles.module.css'

const CustomDateTimePicker = (props) => {

    const changeDateTime = (dateTime) => {
        props.onChangeDateTime(dateTime)
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
                className={styles.fullWidthAdjsut}
                variant="dialog" // TODO Se colocar inline some os botões 'ok' e 'cancel'
                format="dd/MM/yyyy  -  HH:mm"
                margin="normal"
                id="date-picker-inline"
                label={props.label}
                value={props.value}
                onChange={changeDateTime}

            />
        </MuiPickersUtilsProvider>
    )
}

export default CustomDateTimePicker