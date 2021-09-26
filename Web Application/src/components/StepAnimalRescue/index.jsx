import React from 'react'
import styles from './styles.module.css'
import { MDBInput } from "mdbreact";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import CustomDatePicker from '../CustomDatePicker';

function StepAnimalRescue(props) {
    const selectPoliceSupport = () => {
        return (
            <FormControl className={styles.selectPoliceSupport} >
                <InputLabel id="demo-simple-select-helper-label">Houve suporte policial?</InputLabel>
                <Select

                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={props.policeSupport}
                    onChange={(e) => props.onChange({ policeSupport: e.target.value })}
                >
                    <MenuItem value={true}>Sim</MenuItem>
                    <MenuItem value={false}>Não</MenuItem>
                </Select>
                <FormHelperText>Selecione uma opção</FormHelperText>
            </FormControl>
        )
    }

    const selectForwardedToKennel = () => {
        return (
            <FormControl className={styles.selectCForwarded} >
                <InputLabel id="demo-simple-select-helper-label">Enchaminhado para o canil?</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={props.forwardedToKennel}
                    onChange={(e) => props.onChange({ forwardedToKennel: e.target.value })}
                >
                    <MenuItem value={true}>Sim</MenuItem>
                    <MenuItem value={false}>Não</MenuItem>
                </Select>
                <FormHelperText>Selecione uma opção</FormHelperText>
            </FormControl>
        )
    }
    return (
        <div className={styles.container}>
            <CustomDatePicker label={'Data de resgate'} value={new Date()}
                onChangeDate={props.onChangeDate}
            />
            <div>
                <div className={styles.localeRescue}>
                    <div>
                        <MDBInput label="Endereço" className={styles.andress} outline
                            value={props.address} onChange={(e) => props.onChange({ address: e.target.value })}
                        />
                    </div>
                    <div>
                        <MDBInput label="Local" className={styles.andress} outline
                            value={props.locale} onChange={(e) => props.onChange({ locale: e.target.value })}
                        />
                    </div>
                </div>
                <div className={styles.policeSupport}>
                    <div>
                        {selectPoliceSupport()}
                    </div>
                    <div>
                        <MDBInput label="Número do BO" className={styles.boNumber} outline
                            value={props.BONumber} onChange={(e) => props.onChange({ BONumber: e.target.value })}
                        />
                    </div>
                </div>
                <div className={styles.dateRescue}>
                    {selectForwardedToKennel()}
                </div>
            </div>
        </div>
    )
}

export default StepAnimalRescue