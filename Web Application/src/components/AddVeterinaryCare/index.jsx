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
import classNames from 'classnames';

import CustomDatePicker from './../CustomDatePicker/index.jsx'
import CustomSnackbar from './../CustomSnackbar'
import { baseApiUrl } from '../../services/baseApiUrl';

const initialState = {
    dateOfVeterinaryCare: new Date(),
    needOfHospitalization: 0,
    needOfMedication: 0,
    totalCostOfTreatment: '',
    anamnese: '',
    veterinaryName: '',
    animalId: '',
    costsVeterinaries: [], // TODO atualizar custos

    editMode: false,
    accordionExtended: false,

    snackbarVisible: false,
    snackbarMessage: '',
    snackbarType: 'info',
}

class AddVeterinaryCare extends Component {

    state = { ...initialState }

    componentDidMount = () => {
        if (this.props.edit && !this.state.editMode) {
            console.log(this.props.veterinaryCare)
            this.setState({ ...this.props.veterinaryCare, editMode: true })
        }
    }

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
                    <MenuItem value={1}>Sim</MenuItem>
                    <MenuItem value={0}>Não</MenuItem>
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
                    <MenuItem value={1}>Sim</MenuItem>
                    <MenuItem value={0}>Não</MenuItem>
                </Select>

            </FormControl>
        )
    };

    saveVeterinaryCare = async () => {
        let veterinaryCare = {
            dateOfVeterinaryCare: this.state.dateOfVeterinaryCare,
            needOfHospitalization: this.state.needOfHospitalization,
            needOfMedication: this.state.needOfMedication,
            totalCostOfTreatment: this.state.totalCostOfTreatment,
            anamnese: this.state.anamnese,
            veterinaryName: this.state.veterinaryName,
            animalId: this.props.edit ? this.props.veterinaryCare.animalId : this.props.animalId,
        }

        if (this.props.veterinaryCare) veterinaryCare.id = this.props.veterinaryCare.id

        await axios.post(` ${baseApiUrl}/veterinary-care`, { veterinaryCare })
            .then(async _ => {
                this.toggleSnackbarVisibility(true, `Dados veterinários salvos com sucesso!`, 'success')
                this.setState({ ...initialState }, this.props.onRefresh)
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
                    <Accordion
                        elevation={0}
                        defaultExpanded={this.props.edit ? true : false}
                        expanded={this.state.accordionExtended}
                    >
                        <AccordionSummary
                            expandIcon={<i className='bx bx-down-arrow-alt'></i>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            onClick={() => this.setState({ accordionExtended: !this.state.accordionExtended })}
                        >
                            <Typography className={styles.heading}>
                                <i className="fas fa-plus"></i>
                                <span className={styles.spanAdjust}>Adicionar relatório médico</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className={classNames(styles.containerForm, this.props.edit && styles.containerFormEdit)}>
                                <div className={classNames(styles.formMedic, this.props.edit && styles.formMedicEdit)}>
                                    <div className={styles.dateCare}>
                                        <CustomDatePicker label={'Data'} value={this.state.dateOfVeterinaryCare} onChangeDate={(date) => this.setState({ dateOfVeterinaryCare: date })} />
                                    </div>

                                    {this.needOfHospitalization()}
                                    {this.needOfMedication()}
                                    <div className={styles.inputCost}>
                                        <FormControl fullWidth >
                                            <InputLabel htmlFor="standard-adornment-amount">Custos</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
                                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                className={styles.inputC}
                                                value={this.state.totalCostOfTreatment}
                                                onChange={(e) => this.setState({ totalCostOfTreatment: e.target.value })}
                                            />
                                        </FormControl>
                                    </div>
                                    <div className={classNames(styles.medicName, this.props.edit && styles.btTest)}>
                                        <FormControl fullWidth >
                                            <InputLabel htmlFor="standard-adornment-amount">Médico Veterinário</InputLabel>
                                            <Input
                                                id="standard-adornment-amount"
                                                startAdornment={<InputAdornment position="start"><i class='bx bx-user'></i></InputAdornment>}
                                                value={this.state.veterinaryName}
                                                onChange={(e) => this.setState({ veterinaryName: e.target.value })}
                                            />
                                        </FormControl>
                                    </div>
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



