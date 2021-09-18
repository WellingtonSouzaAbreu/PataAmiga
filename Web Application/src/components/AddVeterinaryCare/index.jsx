import React from 'react'
import styles from './styles.module.css'
import { MDBInput } from "mdbreact";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Input from '@material-ui/core/Input';

import InputAdornment from '@material-ui/core/InputAdornment';
import {
	MuiPickersUtilsProvider,

	KeyboardDatePicker,
} from '@material-ui/pickers';


export default function FormAddMedicRelatory(){
    function DataOfCare() {
        const [selectedDate, setSelectedDate] = React.useState(
            new Date('2021-09-18T21:11:54'),
        );
    
        const handleDateChange = (date) => {
            setSelectedDate(date);
        };
    
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid className={styles.dateOfCare}>
                    <KeyboardDatePicker
                        
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Data da Consulta"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        )
    
    }

    function SelectNeedInternation() {
        const [event, setEvent] = React.useState('');
        const handleChange = (event, value) => {
            setEvent(event.target.value);
        };
        return (
            <FormControl className={styles.needInternationSelect} >
                <InputLabel id="demo-simple-select-helper-label">Precisa ser internado?</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={event}
                    onChange={handleChange}
                >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={10}>Sim</MenuItem>
                    <MenuItem value={20}>Não</MenuItem>
    
                </Select>
          
            </FormControl>
        )
    }

    function SelectNeedMedicament() {
        const [event, setEvent] = React.useState('');
        const handleChange = (event, value) => {
            setEvent(event.target.value);
        };
        return (
            <FormControl className={styles.needMedicamentSelect} >
                <InputLabel id="demo-simple-select-helper-label">Precisa de medicação?</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={event}
                    onChange={handleChange}
                >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={10}>Sim</MenuItem>
                    <MenuItem value={20}>Não</MenuItem>
    
                </Select>
               
            </FormControl>
        )
    };

    function InputCost(){
        return(
            <FormControl fullWidth className={styles.inputCost}>
            <InputLabel htmlFor="standard-adornment-amount">Custos</InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </FormControl>
        )
    }

    function MedicName(){
        return(
            <FormControl fullWidth className={styles.medicName}>
            <InputLabel htmlFor="standard-adornment-amount">Médico Veterinário</InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={<InputAdornment position="start"><i class='bx bx-user'></i></InputAdornment>}
            />
          </FormControl>
        )
    }
    
    return(
        <div className={styles.container}>
            <Accordion>
				<AccordionSummary
					expandIcon={<i className='bx bx-down-arrow-alt'></i>}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={styles.heading}>
						<i className='bx bxs-calendar-plus'></i>
						<span className={styles.spanAdjust}>Adicionar relatório médico</span>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
                    <div className={styles.containerForm}>
                        <div className={styles.formMedic}>
                            <DataOfCare/>
                            <SelectNeedInternation/>
                            <SelectNeedMedicament/>
                            <InputCost/>
                            <MedicName/>
                        </div>
                        <div className={styles.containerDiagnostic}>
                            <MDBInput type="textarea" label="Relatório" className={styles.diagnostic} />
                        </div>
                        <div className={styles.confirmButton}>
                            <button className={styles.btnSubmit}>
                                Enviar
                            </button>
                        </div>
                    </div>
					
				</AccordionDetails>
			</Accordion>
        </div>
    )
}



