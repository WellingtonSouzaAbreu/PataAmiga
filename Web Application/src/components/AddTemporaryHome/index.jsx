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
import classNames from "classnames";

const initialState = {
    date: new Date(),
    adopterName: null,
    cellNumber: null,
    animalId: null,

    editMode: false,
    animalsSelect: []
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
        return await axios.get(`${baseApiUrl}/animals/select-options`)
            .then(res => this.setState({ animalsSelect: res.data }))
            .catch(err => {
                console.log(err)
                window.alert('Erro ao obter dados d select')
            })

    }

    changeDate = (date) => {
        this.setState({ date })
    }

    selectAnimal = () => {
        return (
            <FormControl className={classNames(styles.select , this.props.edit && styles.selectEdit)} >
                <InputLabel id="demo-simple-select-helper-label">Animal</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
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
            return <MenuItem value={animal.id}>{`${animal.id} - ${animal.name} - ${animal.breed}`}</MenuItem>
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
                window.alert('Lat temporário registrado com sucesso!')
                this.props.edit
                    ? this.props.onRefresh(true)
                    : this.setState({ ...initialState, animalsSelect: this.state.animalsSelect }, () => { this.props.onRefresh(true); this.loadAnimalsToSelect() })
            })
            .catch(err => {
                console.log(err)
                window.alert(err.response.data)
            })
    }

    render() {
        return (
            <div className={styles.container}>
                <Accordion
                    defaultExpanded = {this.props.edit ? true : false}
                    className={styles.acordion}
                >
                    <AccordionSummary
                        expandIcon={<i className='bx bx-down-arrow-alt'></i>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={styles.heading} >
                            <i className='bx bxs-calendar-plus'></i>
                            <span className={styles.spanAdjust}>{this.props.edit ? 'Editar lar temporário' : 'Cadastrar lar temporário'}   </span>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <div className={classNames(styles.formTH, this.props.edit && styles.formTHEdit)}>
                            <div className={classNames(styles.containerInput , this.props.edit && styles.containerInputEdit)}>
                                <CustomDatePicker label={'Data'}
                                    value={this.state.date} onChangeDate={this.changeDate}
                                />
                            </div>
                           
                            <div  className={classNames(styles.containerInput , this.props.edit && styles.containerInputEdit)}>
                                <MDBInput className={styles.inputRegister} label="Nome do voluntário" outline
                                    value={this.state.adopterName} onChange={(e) => this.setState({ adopterName: e.target.value })}
                                />
                            </div>
                            <div  className={classNames(styles.containerInput , this.props.edit && styles.containerInputEdit)}>
                                <MDBInput className={styles.inputRegister} label="Telefone" outline
                                    value={this.state.cellNumber} onChange={(e) => this.setState({ cellNumber: e.target.value })}
                                />
                            </div>
                            <div  className={classNames(styles.containerInputSelect , this.props.edit && styles.containerInputEdit)}>
                                {this.selectAnimal()}
                                
                            </div>

                            <button className={styles.buttonSubmitForm} onClick={this.saveTemporaryHome}>
                                {this.props.edit ? 'Salvar alterações' : 'Cadastrar'}
                            </button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        )
    }
}

export default AddTemporaryHome