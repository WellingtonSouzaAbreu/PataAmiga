import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const CustomDatePicker = (props) => {

    const changeDate = (date) => {
        props.onChangeDate(date)
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                variant="dialog" 
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                disabled={props.disabled}
                label={props.label}
                value={props.value}
                onChange={changeDate}
            // disablePast
            />
        </MuiPickersUtilsProvider>
    )
}

export default CustomDatePicker