import React, { Component } from 'react'
import styles from './styles.module.css'
import { MDBInput } from "mdbreact";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import CustomDatePicker from '../CustomDatePicker';

class StepAnimalRescue extends Component {
    selectPoliceSupport = () => {
        return (
            <FormControl className={styles.selectPoliceSupport} >
                <InputLabel id="demo-simple-select-helper-label">Houve suporte policial?</InputLabel>
                <Select

                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={!!this.props.rescue.policeSupport}
                    onChange={(e) => this.props.onChange({ policeSupport: e.target.value })}
                >
                    <MenuItem value={true}>Sim</MenuItem>
                    <MenuItem value={false}>Não</MenuItem>
                </Select>
                <FormHelperText>Selecione uma opção</FormHelperText>
            </FormControl>
        )
    }

    selectForwardedToKennel = () => {
        return (
            <FormControl className={styles.selectCForwarded} >
                <InputLabel id="demo-simple-select-helper-label">Enchaminhado para o canil?</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={!!this.props.rescue.forwardedToKennel}
                    onChange={(e) => this.props.onChange({ forwardedToKennel: e.target.value })}
                >
                    <MenuItem value={true}>Sim</MenuItem>
                    <MenuItem value={false}>Não</MenuItem>
                </Select>
                <FormHelperText>Selecione uma opção</FormHelperText>
            </FormControl>
        )
    }
    render() {
        return (
            <div className={styles.container} >
                <div className={styles.group}>
                    <CustomDatePicker label={'Data de resgate'} value={this.props.rescue.dateOfRescue}
                        onChangeDate={this.props.onChangeDate}
                    />

                    <div>
                        <MDBInput label="Endereço" className={styles.andress} outline
                            value={this.props.rescue.address} onChange={(e) => this.props.onChange({ address: e.target.value })}
                        />
                        <MDBInput label="Local" className={styles.andress} outline
                            value={this.props.rescue.locale} onChange={(e) => this.props.onChange({ locale: e.target.value })}
                        />
                        {this.selectPoliceSupport()}
                        <MDBInput label="Número do BO" className={styles.boNumber} outline
                            value={this.props.rescue.BONumber} onChange={(e) => this.props.onChange({ BONumber: e.target.value })}
                        />
                        {this.selectForwardedToKennel()}
                    </div>
                </div>
            </div>
        )
    }
}

export default StepAnimalRescue