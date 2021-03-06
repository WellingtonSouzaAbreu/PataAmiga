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
    snackbarType: 'info',
    accordionExtended: false,
}

class AddAdoption extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        const animalsSelect = await this.getAnimalsSelectOptions()
        const collaboratorsSelect = await this.getCollaboratorsSelectOptions()

        console.log(animalsSelect)

        this.setState({ // TODO gambiarara
            animalsSelect,
            collaboratorsSelect,
            ...(this.props.edit ? this.props.adoption : {}),
            usersSelect: this.props.edit ? [{ id: this.props.userId, label: `${this.props.adoption.adopterName} - ${this.props.adoption.cellNumber}` }] : null
        })
    }

    getAnimalsSelectOptions = async () => {
        return await axios.get(`${baseApiUrl}/animal/select-options${this.props.edit ? `?animalPreviousSelected=${this.props.adoption.animalId}` : ''}`)
            .then(res => res.data)
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Houve um erro ao obter lista de animais!`, 'error')
            })
    }

    getCollaboratorsSelectOptions = async () => {
        return await axios.get(`${baseApiUrl}/collaborator/select-options`)
            .then(res => res.data)
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Houve um erro ao obter lista de colaboradores!`, 'error')
            })
    }

    selectAnimal = () => {
        return (
            <FormControl className={classNames(styles.select, this.props.edit && styles.selectEdit)} >
                <InputLabel id="demo-simple-select-helper-label">Animal</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={this.props.edit ? this.props.adoption.animalId : this.state.animalId}
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
                <MenuItem value={animal.id} /* selected={this.props.edit} */>{`${animal.id} - ${animal.name}`}</MenuItem>
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
                    value={this.props.edit ? this.props.adoption.collaboratorId : this.state.collaboratorId}
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
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={this.state.usersSelect || []}
                    sx={{ width: 300 }}
                    onChange={(e) => this.setState({ userId: e.target.id })}
                    renderOption={(props, user) => {
                        return <div {...props} id={user.id}>{user.label}</div>
                    }}
                    renderInput={(params) => {
                        return <TextField {...params} label='Nome do guardi??o'
                            value={this.props.edit ? this.props.adopterName : this.state.userName} onChange={this.updateUserField}
                        />
                    }}
                />
            </FormControl>
        )
    }

    updateUserField = async (e) => {
        if (e.target.value.length >= 3) {
            const usersSelect = await this.loadUserSelectOptions(e.target.value)
            console.log(usersSelect)
            this.setState({ usersSelect })
        }

        this.setState({ userName: e.target.value })
    }

    loadUserSelectOptions = async (query) => {
        return await axios.get(`${baseApiUrl}/user/select-options?userName=${query}`)
            .then(res => {
                console.log('userdata')
                console.log(res.data)
                return res.data
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Houve um erro ao obter lista de usu??rios com estas letras!`, 'error')
            })
    }

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
                this.toggleSnackbarVisibility(true, `Ado????o cadastrada com sucesso!`, 'success')
                this.setState({
                    animalId: null,
                    userId: null,
                    userName: null,
                    dateAdoption: new Date(),
                    collaboratorId: null,
                    accordionExtended: false 
                })
                this.props.onRefresh(true)
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Houve um erro ao cadastrar ado????o!`, err.response.status == 400 ? 'warning' : 'error')
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
                        expanded={this.props.edit || this.state.accordionExtended}
                        className={classNames(styles.acordion)}
                    >
                        <AccordionSummary
                            expandIcon={<i className='bx bx-down-arrow-alt'></i>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            onClick={() => this.setState({ accordionExtended: !this.state.accordionExtended })}
                        >
                            <Typography className={styles.heading} >
                                <i class="far fa-plus-square"></i>
                                <span className={styles.spanAdjust}>{this.props.edit ? 'Editar ado????o' : 'Cadastrar ado????o'}   </span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <div className={classNames(styles.containerForm, this.props.edit && styles.containerFormEdit)}>
                                <div className={styles.containerDataPicker} >
                                    <CustomDatePicker label={'Data da ado????o'} value={this.state.dateAdoption}
                                        onChangeDate={(dateAdoption) => this.setState({ dateAdoption })}
                                    />
                                </div>
                                <div className={classNames(styles.containerSelectAnimalGuardian, this.props.edit && styles.containerSelectAnimalGuardianEdit)}>
                                    <div className={classNames(styles.containerSelectAnimal, this.props.edit && styles.containerSelectAnimalEdit)}>
                                        {this.selectAnimal()}
                                        <div className={styles.btModalInfo, this.props.edit}>
                                            {this.state.animalId && <AnimalDetails idAnimal={this.state.animalId} />}
                                        </div>
                                    </div>
                                </div>
                                <div className={classNames(styles.guardianCollaboratorGroup)}>
                                    <div className={styles.containerSlectCollaborator} >
                                        {this.selectGuardian()}
                                    </div>
                                    <div className={styles.containerSlectCollaborator}>
                                        {this.selectCollaborator()}
                                    </div>
                                </div>
                                <div className={styles.containerButton}>
                                    <button onClick={this.saveAdoption}
                                        className={classNames(styles.btRegisterAdoption, this.props.edit && styles.btRegisterAdoptionEdit)}>
                                        {this.props.edit ? 'Salvar altera????es' : 'Cadastrar ado????o'}
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

export default AddAdoption