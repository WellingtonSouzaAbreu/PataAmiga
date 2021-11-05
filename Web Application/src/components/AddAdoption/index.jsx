import React, { Component } from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '@mui/material/Autocomplete'
import { MenuItem, Select, InputLabel, FormControl, TextField } from "@material-ui/core";
import styles from './styles.module.css'
import classNames from "classnames";
import axios from 'axios'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import CustomDatePicker from "./../CustomDatePicker";
import CustomSnackbar from "./../CustomSnackbar";
import AnimalDetails from "./../AnimalDetails";

const initialState = {
    animalId: null,
    userId: null,
    userName: null,
    dateAdoption: new Date(),
    collaboratorId: null,

    animalsSelect: [],
    collaboratorsSelect: [],
    usersSelect: [],

    snackbarVisible: false,
    snackbarMessage: '',
    snackbarType: 'info'
}

class AddAdoption extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        const animalsSelect = await this.getAnimalsSelectOptions()
        const collaboratorsSelect = await this.getCollaboratorsSelectOptions()

        console.log(animalsSelect)

        this.setState({ animalsSelect, collaboratorsSelect, ...(this.props.edit ? this.props.adoption : {}) })
    }

    getAnimalsSelectOptions = async () => {
        return await axios.get(`${baseApiUrl}/animal/select-options${this.props.edit ? `?animalPreviousSelected=${this.props.adoption.id}` : ''}`)
            .then(res => res.data)
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, `Erro ao obter lista de animais!`, 'error')
            })
    }

    toggleSnackbarVisibility = (visibility, message, type) => {
        if (visibility) {
            this.setState({ snackbarVisible: visibility, snackbarMessage: message, snackbarType: type })
        } else {
            this.setState({ snackbarVisible: !!visibility })
        }
    }

    getCollaboratorsSelectOptions = async () => {
        return await axios.get(`${baseApiUrl}/collaborator/select-options`)
            .then(res => res.data)
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, `Erro ao obter lista de colaboradores!`, 'error')
            })
    }

    selectAnimal = () => {
        return (
            <FormControl className={classNames(styles.select, this.props.edit && styles.selectEdit)} >
                <InputLabel id="demo-simple-select-helper-label">Animal</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={this.props.editMode ? this.props.adoption.animalId : this.state.animalId}
                    onChange={(e) => this.setState({ animalId: e.target.value })}
                >
                    <MenuItem value={null} >Selecione um animal</MenuItem>
                    {this.renderAnimalSelectOptions()}
                </Select>
            </FormControl>
        )
    }

    renderAnimalSelectOptions = () => {
        if (!this.state.animalsSelect) return

        return this.state.animalsSelect.map(animal => {
            return (
                <MenuItem value={animal.id}>{`${animal.id} - ${animal.name}`}</MenuItem>
            )
        })
    }

    selectCollaborator = () => {
        return (
            <FormControl className={classNames(styles.select, this.props.edit && styles.selectEdit)} >
                <InputLabel id="demo-simple-select-helper-label">Colaborador</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={this.props.editMode ? this.props.adoption.collaboratorId : this.state.collaboratorId}
                    onChange={(e) => this.setState({ collaboratorId: e.target.value })}
                >
                    <MenuItem value={null}  >Selecione um colaborador</MenuItem>
                    {this.renderCollaboratorSelectOptions()}

                </Select>
            </FormControl>
        )
    }

    renderCollaboratorSelectOptions = () => {
        return this.state.collaboratorsSelect.map(collaborator => {
            return (
                <MenuItem value={collaborator.id}>{`${collaborator.name} - ${collaborator.id}`}</MenuItem>
            )
        })
    }

    selectGuardian = () => {
        return (
            <FormControl className={classNames(styles.select, this.props.edit && styles.selectEdit)} >
                <CustomSnackbar visible={this.state.snackbarVisible} message={this.state.snackbarMessage} type={this.state.snackbarType} onClose={this.toggleSnackbarVisibility} />
                {/* <InputLabel id="demo-simple-select-helper-label">Novo guardião</InputLabel> */}
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={this.state.usersSelect}
                    sx={{ width: 300 }}
                    // inputValue={this.state.userId}
                    onChange={(e) => this.setState({userId: e.target.id})}
                    renderOption={(props, user) => {
                        return <div {...props} id={user.id}>{user.label}</div>
                    }}
                    renderInput={(params) => {
                        return <TextField {...params} label='Nome do guardião'
                            value={this.state.userName} onChange={this.updateUserField}
                        />
                    }}
                />
                {/*  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={this.props.editMode ? this.props.adoption.userId : this.state.userId}
                    onChange={(e) => this.setState({ userId: e.target.value })}
                >
                    <MenuItem value={null}  >Selecione um guardião</MenuItem>
                    <MenuItem value={1}>Gabriel</MenuItem>
                    <MenuItem value={2}>Natalia</MenuItem>
                    <MenuItem value={3}>José</MenuItem>
                </Select> */}
            </FormControl>
        )
    }

    updateUserField = async (e) => {
        if (e.target.value.length >= 3) {
            const usersSelect = await this.loadUserSelectOptions(e.target.value)
            this.setState({ usersSelect })
        }

        this.setState({ userName: e.target.value })
    }

    loadUserSelectOptions = async (query) => {
        return await axios.get(`${baseApiUrl}/user/select-options?userName=${query}`)
            .then(res => res.data)
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, `Erro ao obter lista de usuários com estas letras!`, 'error')
            })
    }

    /* selectPeriodAdoption = () => {
        return (
            <FormControl className={classNames(styles.select, this.props.edit && styles.selectEdit)} >
                <InputLabel id="demo-simple-select-helper-label">Período</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"

                >
                    <MenuItem value={null}>Selecione</MenuItem>
                    <MenuItem value={10}>1 Mês</MenuItem>
                    <MenuItem value={20}>2 Meses</MenuItem>
                    <MenuItem value={30}>3 Meses</MenuItem>
                </Select>
            </FormControl>
        )
    } */

    saveAdoption = async () => {
        const adoption = {
            dateAdoption: this.state.dateAdoption,
            animalId: this.state.animalId,
            userId: this.state.userId,
            collaboratorId: this.state.collaboratorId,
        }

        if (this.props.edit) adoption.id = this.props.adoption.id

        await axios.post(`${baseApiUrl}/adoption`, { adoption })
            .then(_ => {
                this.toggleSnackbarVisibility(true, `Adoção cadastrada com sucesso!`, 'success')
                this.props.onRefresh()
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true,  err.response ? err.response.data : `Erro ao cadastrar adoção!`, 'error')
            })

    }

    render() {
        return (
            <div className={styles.container}>
                <Accordion
                    defaultExpanded={true}
                    className={styles.acordion}
                >
                    <AccordionSummary
                        expandIcon={<i className='bx bx-down-arrow-alt'></i>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classNames(styles.heading, this.props.edit && styles.headingEdit)} >
                            <i className='bx bxs-calendar-plus'></i>
                            <span className={styles.spanAdjust}>{this.props.edit ? 'Editar adoção' : 'Registrar adoção'}   </span>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <div className={styles.containerForm}>
                            <div className={styles.containerInputBt}>
                                {this.selectAnimal()}
                                <div className={styles.btModal}>
                                    {this.state.animalId && <AnimalDetails idAnimal={this.state.animalId} />}
                                </div>

                            </div>
                            <div className={styles.containerInput}>
                                {this.selectGuardian()}
                            </div>
                            <div className={classNames(styles.containerInput)}>
                                <CustomDatePicker label={'Data da adoção'} value={this.state.dateAdoption}
                                    onChangeDate={(dateAdoption) => this.setState({ dateAdoption })}
                                />
                            </div>
                            {/* <div className={classNames(styles.containerInput)}>
                                {this.selectPeriodAdoption()}
                            </div> */}
                            <div className={styles.containerInput}>
                                {this.selectCollaborator()}
                            </div>

                        </div>
                    </AccordionDetails>
                </Accordion>
                <button onClick={this.saveAdoption}>Cadastrar adoção</button> // Provisótio TODO
            </div>
        )
    }
}

export default AddAdoption