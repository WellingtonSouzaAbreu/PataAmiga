import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { MenuItem, Select, InputLabel, FormControl } from "@material-ui/core";
import axios from 'axios'

import AnimalDetails from '../AnimalDetails'
import styles from './styles.module.css'


import { baseApiUrl } from './../../services/baseApiUrl.js'
import CustomDatePicker from "../CustomDatePicker";
import CustomSnackbar from './../CustomSnackbar'
import classNames from "classnames";

const initialState = {
    date: new Date(),
    adopterName: '',
    cellNumber: '',
    animalId: null,

    editMode: false,
    animalsSelect: [],

    snackbarVisible: false,
    snackbarMessage: '',
    snackbarType: 'info',

    accordionExtended: false
}

class AddTemporaryHome extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        await this.loadAnimalsToSelect()
        if (this.props.edit && !this.state.editMode) {
            this.setState({ ...this.props.temporaryHome })
        }
    }

    loadAnimalsToSelect = async () => {
        return await axios.get(`${baseApiUrl}/animal/select-options`)
            .then(res => this.setState({ animalsSelect: res.data }))
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Erro ao obter lista de animais!`, 'error')
            })
    }

    changeDate = (date) => {
        this.setState({ date })
    }

    selectAnimal = () => {
        console.log(this.props.temporaryHome && this.props.temporaryHome.animalId)
        return (
            <FormControl className={classNames(styles.select, this.props.edit && styles.selectEdit)} >
                <InputLabel id="demo-simple-select-helper-label">Animal</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    className={classNames(this.props.edit && styles.editSelect)}
                    value={this.props.editMode ? this.props.temporaryHome.animalId : this.state.animalId}
                    onChange={(e) => this.setState({ animalId: e.target.value })}
                >
                    <MenuItem value={null}  >Selecione um animal</MenuItem>
                    {this.renderSelectOptions()}
                </Select>
            </FormControl>
        )
    }

    renderSelectOptions = () => {
        return this.state.animalsSelect.map(animal => {
            return <MenuItem value={animal.id}>{`${animal.name} - ${animal.breed} - ${animal.id}`}</MenuItem>
        })
    }

    saveTemporaryHome = async () => {
        let temporaryHome = {
            adopterName: this.state.adopterName,
            date: this.state.date,
            cellNumber: this.state.cellNumber,
            animalId: this.state.animalId,
        }

        if (this.props.temporaryHome) temporaryHome.id = this.props.temporaryHome.id

        await axios.post(`${baseApiUrl}/temporary-home`, { temporaryHome })
            .then(_ => {
                this.toggleSnackbarVisibility(true, `Lar tempor??rio cadastrado com sucesso!`, 'success')
                this.props.edit
                    ? this.props.onRefresh(true)
                    : this.setState({
                        ...initialState,
                        animalsSelect: this.state.animalsSelect,
                        snackbarVisible: true,
                        snackbarMessage: 'Lar tempor??rio cadastrado com sucesso!',
                        snackbarType: 'success'
                    }, () => { this.props.onRefresh(true); this.loadAnimalsToSelect() })
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Erro ao cadastrar lar tempor??rio!`, err.response.status == 400 ? 'warning' : 'error')
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
                        className={styles.acordion}
                        defaultExpanded={this.props.edit ? true : false}
                        expanded={this.props.edit || this.state.accordionExtended}
                    >
                        <AccordionSummary
                            expandIcon={<i className='bx bx-down-arrow-alt'></i>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            onClick={() => this.setState({ accordionExtended: !this.state.accordionExtended })}
                        >
                            <Typography className={classNames(styles.headAcordion, this.props.edit && styles.Headacordion)} >
                                <i className='bx bxs-calendar-plus'></i>
                                <span className={styles.spanAdjust}>{this.props.edit ? 'Editar lar tempor??rio' : 'Cadastrar lar tempor??rio'}   </span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <div className={classNames(styles.formTH, this.props.edit && styles.formTHEdit)}>
                                <div className={classNames(styles.containerInput, this.props.edit && styles.containerInputEdit)}>
                                    <CustomDatePicker label={'Data'}
                                        value={this.state.date} onChangeDate={this.changeDate}
                                    />
                                </div>
                                <div className={classNames(styles.containerInputSelect, this.props.edit && styles.containerInputEdit)}>
                                    {this.selectAnimal()}
                                </div>

                                <div className={classNames(styles.containerInput, this.props.edit && styles.containerInputEdit)}>
                                    <MDBInput className={styles.inputRegister} label="Telefone" outline
                                        value={this.state.cellNumber} onChange={(e) => this.setState({ cellNumber: e.target.value })}
                                    />
                                </div>
                                <div className={classNames(styles.containerInput, this.props.edit && styles.containerInputEdit)}>
                                    <MDBInput className={styles.inputRegister} label="Nome do volunt??rio" outline
                                        value={this.state.adopterName} onChange={(e) => this.setState({ adopterName: e.target.value })}
                                    />
                                </div>

                                <button className={classNames(styles.buttonSubmitForm, this.props.edit && styles.buttonSubmitFormEdit)} onClick={this.saveTemporaryHome}>
                                    {this.props.edit ? 'Salvar altera????es' : 'Cadastrar'}
                                </button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </>
        )
    }
}

export default AddTemporaryHome