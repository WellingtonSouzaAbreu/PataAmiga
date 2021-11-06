import React, { Component } from 'react'
import styles from './styles.module.css'
import { MDBInput } from "mdbreact";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios'

import CustomDatePicker from './../CustomDatePicker/index.jsx'
import CustomSnackbar from './../CustomSnackbar'
import { baseApiUrl } from '../../services/baseApiUrl';

const initialState = {
    dateOfVeterinaryCare: new Date(),
    needOfHospitalization: false,
    needOfMedication: false,
    totalCostOfTreatment: null,
    anamnese: null,
    veterinaryName: null,
    animalId: null,
    costsVeterinaries: [], // TODO atualizar custos

    snackbarVisible: false,
    snackbarMessage: '',
    snackbarType: 'info',
}

class AddVeterinaryCare extends Component {

    state = { ...initialState }

    needOfHospitalization = () => {
        return (
            <FormControl className={styles.needInternationSelect} >
                <InputLabel id="demo-simple-select-helper-label">Precisa ser internado?</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={this.state.needOfHospitalization}
                    onChange={(e) => this.setState({ needOfHospitalization: e.target.value })}
                >
                    <MenuItem value={true}>Sim</MenuItem>
                    <MenuItem value={false}>Não</MenuItem>
                </Select>
            </FormControl>
        )
    }

    needOfMedication = () => {
        return (
            <FormControl className={styles.needMedicamentSelect} >
                <InputLabel id="demo-simple-select-helper-label">Precisa de medicação?</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={this.state.needOfMedication}
                    onChange={(e) => this.setState({ needOfMedication: e.target.value })}
                >
                    <MenuItem value={true}>Sim</MenuItem>
                    <MenuItem value={false}>Não</MenuItem>
                </Select>

            </FormControl>
        )
    };

    saveVeterinaryCare = async () => {
        await axios.post(` ${baseApiUrl}/veterinary-care`, { veterinaryCare: { ...this.state, animalId: this.props.animalId } })
            .then(async _ => {
                await this.props.onRefresh()
                this.toggleSnackbarVisibility(true,`Dados veterinários salvos com sucesso!`, 'success')
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Erro ao cadastrar dados veterinários!`, err.response.status == 400 ? 'warning' : 'error')
            })
    }

    toggleSnackbarVisibility = (visibility, message, type) => {
        if (visibility) {
            this.setState({ snackbarVisible: visibility, snackbarMessage: message, snackbarType: type })
        } else {
            this.setState({ snackbarVisible: !!visibility })
        }
    }

    render() {
        return (
            <>
                <CustomSnackbar visible={this.state.snackbarVisible} message={this.state.snackbarMessage} type={this.state.snackbarType} onClose={this.toggleSnackbarVisibility} />
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
                                    <CustomDatePicker label={'Data'} value={this.state.dateOfVeterinaryCare} onChangeDate={(date) => this.setState({ dateOfVeterinaryCare: date })} />
                                    {this.needOfHospitalization()}
                                    {this.needOfMedication()}
                                    <FormControl fullWidth className={styles.inputCost}>
                                        <InputLabel htmlFor="standard-adornment-amount">Custos</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            value={this.state.totalCostOfTreatment}
                                            onChange={(e) => this.setState({ totalCostOfTreatment: e.target.value })}
                                        />
                                    </FormControl>
                                    <FormControl fullWidth className={styles.medicName}>
                                        <InputLabel htmlFor="standard-adornment-amount">Médico Veterinário</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            startAdornment={<InputAdornment position="start"><i class='bx bx-user'></i></InputAdornment>}
                                            value={this.state.veterinaryName}
                                            onChange={(e) => this.setState({ veterinaryName: e.target.value })}
                                        />
                                    </FormControl>
                                </div>
                                <div className={styles.containerDiagnostic}>
                                    <MDBInput type="textarea" label="Relatório" className={styles.diagnostic}
                                        value={this.state.anamnese} onChange={e => this.setState({ anamnese: e.target.value })}
                                    />
                                </div>
                                <div className={styles.confirmButton}>
                                    <button className={styles.btnSubmit} onClick={this.saveVeterinaryCare}>
                                        Enviar
                                    </button>
                                </div>
                            </div>

                        </AccordionDetails>
                    </Accordion>
                </div>
            </>
        )
    }
}

export default AddVeterinaryCare



