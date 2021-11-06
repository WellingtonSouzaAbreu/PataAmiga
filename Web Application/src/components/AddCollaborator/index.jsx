import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

import styles from './styles.module.css'

import { baseApiUrl } from "../../services/baseApiUrl";
import CustomDatePicker from "../CustomDatePicker";
import CustomSnackbar from './../CustomSnackbar'
import classNames from "classnames";

const initialState = {
    name: '',
    dateOfBirth: new Date(),
    city: '',
    cellNumber: '',

    editMode: false,
    snackbarVisible: false,
    snackbarMessage: '',
    snackbarType: 'info'
}

class AddCollaborator extends Component {

    state = { ...initialState }

    componentDidMount = () => {
        if (this.props.edit && !this.state.editMode) {
            this.setState({ ...this.props.collaborator })
        }
    }

    saveCollaborator = async () => {
        let collaborator = {
            name: this.state.name,
            dateOfBirth: this.state.dateOfBirth,
            city: this.state.city,
            cellNumber: this.state.cellNumber,
        }

        if (this.props.collaborator) collaborator.id = this.props.collaborator.id

        await axios.post(`${baseApiUrl}/collaborator`, { collaborator })
            .then(_ => {
                this.toggleSnackbarVisibility(true, `Colaborador cadastrado com sucesso!`, 'success')
                this.props.edit
                    ? this.props.onRefresh(true)
                    : this.setState({ ...initialState }, () => this.props.onRefresh(true))
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Houve um erro ao cadastrar colaborador!`, err.response.status == 400 ? 'warning' : 'error')
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
                        defaultExpanded={this.props.edit ? true : false}
                        className={styles.acordion}
                    >
                        <AccordionSummary
                            expandIcon={<i className='bx bx-down-arrow-alt'></i>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classNames(styles.heading, this.props.edit && styles.headingEdit)} >
                                <i className='bx bxs-calendar-plus'></i>
                                <span className={styles.spanAdjust}>{this.props.edit ? 'Editar colaborador' : 'Cadastrar colaborador'}   </span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <div className={classNames(styles.formVolunteers, this.props.edit && styles.formVolunteersEdit)} >
                                <div className={classNames(styles.containerInput, this.props.edit && styles.containerInputEdit)}>
                                    <MDBInput className={classNames(styles.inputRegister, this.props.edit && styles.inputRegisterEdit)} label="Nome" outline
                                        value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}
                                    />
                                </div>
                                <div className={classNames(styles.containerInput, this.props.edit && styles.containerInputEdit)}>
                                    <CustomDatePicker label="Nascimento"
                                        value={this.state.dateOfBirth} onChangeDate={(dateOfBirth) => this.setState({ dateOfBirth })}
                                    />
                                </div>
                                <div className={classNames(styles.containerInput, this.props.edit && styles.containerInputEdit)}>
                                    <MDBInput className={styles.inputRegister} label="Cidade" outline
                                        value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })}
                                    />
                                </div>
                                <div className={classNames(styles.containerInput, this.props.edit && styles.containerInputEdit)}>
                                    <MDBInput className={styles.inputRegister} label="Telefone" outline
                                        value={this.state.cellNumber} onChange={(e) => this.setState({ cellNumber: e.target.value })}
                                    />
                                </div>

                                <button className={styles.buttonSubmitForm} onClick={this.saveCollaborator} >
                                    {this.props.edit ? 'Salvar alterações' : 'Cadastrar'}
                                </button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </>
        )
    }
}

export default AddCollaborator