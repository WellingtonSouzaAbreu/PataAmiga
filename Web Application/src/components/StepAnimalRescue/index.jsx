import React from 'react'
import styles from './styles.module.css'


import { MDBInput } from "mdbreact";

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,

	KeyboardDatePicker,
} from '@material-ui/pickers';


export default function StepRescueAnimal(){


    function DataPicker() {
        const [selectedDate, setSelectedDate] = React.useState(
            new Date('2014-08-18T21:11:54'),
        );
    
        const handleDateChange = (date) => {
            setSelectedDate(date);
        };
    
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid>
                    <KeyboardDatePicker
                        className={styles.fullWidthAdjsut}
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Data do resgate"
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
    
    function SelectPoliceSuport() {
        const [sex, setSex] = React.useState('');
        const handleChange = (event, value) => {
            setSex(event.target.value);
        };
        return (
            <FormControl className={styles.selectPoliceSuport} >
                <InputLabel id="demo-simple-select-helper-label">Houve suporte policial?</InputLabel>
                <Select
                    
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={sex}
                    onChange={handleChange}
                >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={10}>Sim</MenuItem>
                    <MenuItem value={20}>Não</MenuItem>
    
                </Select>
                <FormHelperText>Selecione uma opção</FormHelperText>
            </FormControl>
        )
    }

    function SelectForwardedToKennel() {
        const [sex, setSex] = React.useState('');
        const handleChange = (event, value) => {
            setSex(event.target.value);
        };
        return (
            <FormControl className={styles.selectCForwarded} >
                <InputLabel id="demo-simple-select-helper-label">Enchaminhado para o canil?</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={sex}
                    onChange={handleChange}
                >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={10}>Sim</MenuItem>
                    <MenuItem value={20}>Não</MenuItem>
    
                </Select>
                <FormHelperText>Selecione uma opção</FormHelperText>
            </FormControl>
        )
    }
    return(
        <div className={styles.container}>
            <DataPicker/>
            <div>                
                <div className={styles.localeRescue}>
                    <div>
                       <MDBInput label="Endereço" className={styles.andress} outline  />
                    </div>
                    <div>
                        <MDBInput label="Local"  className={styles.andress} outline  />
                    </div>
                </div>
                <div className={styles.policeSuport}>
                    <div>
                        <SelectPoliceSuport/>
                    </div>
                    <div>
                        <MDBInput label="Número do BO"  className={styles.boNumber} outline />
                    </div>
                  
                </div>
               
                <div className={styles.dateRescue}>
                    <SelectForwardedToKennel/>
                </div>

            </div>
           

            
           
        </div>
    )
}