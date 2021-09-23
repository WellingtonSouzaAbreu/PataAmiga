import React from 'react'
import styles from './styles.module.css'
import { MDBInput } from "mdbreact";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';

import InputAdornment from '@material-ui/core/InputAdornment';

import CustomDatePicker from './../CustomDatePicker/index.jsx'


export default function StepAnimalVeterinary(props) {

    const selectNeedOfHospitalization = () => {
        return (
            <FormControl className={styles.needInternationSelect} >
                <InputLabel id="demo-simple-select-helper-label">Precisa ser internado?</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={props.veterinaryCare.needOfHospitalization}
                    onChange={e => props.onChange({ needOfHospitalization: e.target.value })}
                >
                    <MenuItem value={true}>Sim</MenuItem>
                    <MenuItem value={false}>Não</MenuItem>

                </Select>
            </FormControl>
        )
    }

    const selectNeedOfMedication = () => {

        return (
            <FormControl className={styles.needMedicamentSelect} >
                <InputLabel id="demo-simple-select-helper-label">Precisa de medicação?</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={props.veterinaryCare.needOfMedication}
                    onChange={e => props.onChange({ needOfMedication: e.target.value })}
                >
                    <MenuItem value={true}>Sim</MenuItem>
                    <MenuItem value={false}>Não</MenuItem>
                </Select>
            </FormControl>
        )
    };

    return (
        <div className={styles.container}>

            <div className={styles.containerForm}>
                <div className={styles.formMedic}>
                    <div>
                        <CustomDatePicker label={'Data'} value={props.veterinaryCare.dateOfVeterinaryCare}
                            onChangeDate={props.onChangeDate}
                        />
                    </div>
                    <div>
                        {selectNeedOfHospitalization()}
                    </div>
                    <div>
                        {selectNeedOfMedication()}
                    </div>
                    <div>
                        <FormControl fullWidth className={styles.inputCost}>
                            <InputLabel htmlFor="standard-adornment-amount">Custos</InputLabel>
                            <Input
                                id="standard-adornment-amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                value={props.veterinaryCare.totalCostOfTreatment} onChange={e => props.onChange({ totalCostOfTreatment: e.target.value })}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl fullWidth className={styles.medicName}>
                            <InputLabel htmlFor="standard-adornment-amount">Médico Veterinário</InputLabel>
                            <Input
                                id="standard-adornment-amount"
                                startAdornment={<InputAdornment position="start"><i class='bx bx-user'></i></InputAdornment>}
                                value={props.veterinaryCare.veterinaryName} onChange={e => props.onChange({ veterinaryName: e.target.value })}
                            />
                        </FormControl>
                    </div>

                </div>
                <div className={styles.containerDiagnostic}>
                    <MDBInput type="textarea" label="Relatório" className={styles.diagnostic}
                        value={props.veterinaryCare.anamnese} onChange={e => props.onChange({ anamnese: e.target.value })}
                    />
                </div>
            </div>
        </div>
    )
}



