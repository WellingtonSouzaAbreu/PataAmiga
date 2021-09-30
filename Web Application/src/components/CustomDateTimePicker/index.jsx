import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker, DateTimePicker } from '@material-ui/pickers';


import styles from './styles.module.css'

const CustomDateTimePicker = (props) => {

    const changeDateTime = (dateTime) => {
        props.onChangeDateTime(dateTime)
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDateTimePicker
                className={styles.fullWidthAdjsut}
                variant="inline" 
                format="dd/MM/yyyy  -  HH:mm"
                margin="normal"
                id="date-picker-inline"
                label={props.label}
                value={props.value}
                onChange={changeDateTime}
                // disablePast
            />
        </MuiPickersUtilsProvider>
    )
}

export default CustomDateTimePicker