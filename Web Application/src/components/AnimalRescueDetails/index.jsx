import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import { MenuItem, Select, InputLabel, FormControl } from "@material-ui/core";
import axios from 'axios'

import styles from './styles.module.css'

import { baseApiUrl } from "../../services/baseApiUrl";
import CustomDatePicker from "../CustomDatePicker";
import classNames from "classnames";

const initialState = {
    id: null,
    dateOfRescue: new Date(),
    BONumber: null,
    address: null,
    animalId: null,
    locale: null,
    forwardedToKennel: 0,
    policeSupport: 0,
    veterinaryCareId: 0,

    editMode: false
}

class AnimalDetailsRescue extends Component {

    state = { ...initialState }

    componentDidMount = () => {
        this.setState({ ...this.props.rescue })
    }

    selectPoliceSuport = () => {
        return (
            <FormControl className={classNames(styles.select, this.state.editMode && styles.selectEdit)} >
                <InputLabel id="demo-simple-select-helper-label">Acompanhamento Policial</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    disabled={!this.state.editMode}
                    value={this.state.policeSupport}
                    onChange={(e) => this.setState({ policeSupport: e.target.value })}
                >
                    <MenuItem value={0}>Sim</MenuItem>
                    <MenuItem value={1}>Não</MenuItem>
                </Select>
            </FormControl>
        )
    }

    selectMovedToCanil = () => {
        return (
            <FormControl className={classNames(styles.selectMovedToCanil, this.state.editMode && styles.selectEdit)} >
                <InputLabel id="demo-simple-select-helper-label">Enviado ao canil</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    disabled={!this.state.editMode}
                    value={this.state.forwardedToKennel}
                    onChange={(e) => this.setState({ forwardedToKennel: e.target.value })}
                >
                    <MenuItem value={1}>Sim</MenuItem>
                    <MenuItem value={0}>Não</MenuItem>
                </Select>
            </FormControl>
        )
    }

    enableEditing = async () => {
        this.setState({ editMode: true })
    }

    saveRescue = async () => {
        let rescue = { ...this.state }
        delete rescue.editMode

        await axios.put(`${baseApiUrl}/rescue/${this.state.animalId}`, { rescue })
            .then(_ => {

                window.alert('Alterações salvas com sucesso!')
                this.setState({ editMode: false }, this.props.onRefresh)
            })
            .catch(err => {
                console.log(err)
                window.alert(err.response ? err.response.data : 'Erro ao editar dados de resgate')
            })
    }

    render() {

        console.log(this.props.rescue)

        return (
            <div className={styles.container}>

                <div className={styles.box}>
                    {/* <span>Informações do Resgate</span> */} {/* TODO achei redundante */}
                    <div className={classNames(styles.dateOfRescueMoved)}>
                        <div className={styles.dataRescue}>
                            <CustomDatePicker label={'Data do Resgate'} value={this.state.dateOfRescue}
                                onChangeDate={(dateOfRescue) => this.setState({ dateOfRescue })}
                                disabled={!this.state.editMode}
                            />
                        </div>
                        <div className={styles.movedToCanil}>
                            {this.selectMovedToCanil()}
                        </div>

                    </div>
                    <div className={styles.andressLocale}>
                        <div className={styles.infoAndress}>
                            <MDBInput outline label="Endereço onde o animal foi resgatado" className={styles.descriptionAndress} disabled={!this.state.editMode}
                                value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })}
                            />
                        </div>
                        <div className={styles.infoLocale}>
                            <MDBInput outline label="Local do resgate" className={styles.descriptionInput} disabled={!this.state.editMode}
                                value={this.state.locale} onChange={(e) => this.setState({ locale: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className={styles.policeSuport}>
                        <div className={styles.selectPoliceSuport}>
                            {this.selectPoliceSuport()}
                        </div>
                        <div className={styles.BONumber}>
                            <MDBInput outline label="Boletim de Ocorrência" className={styles.descriptionAndress} disabled={!this.state.editMode}
                                value={this.state.BONumber} onChange={(e) => this.setState({ BONumber: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className={styles.btContainer}>
                        <button className={styles.btEdit} onClick={this.state.editMode ? this.saveRescue : this.enableEditing}>{this.state.editMode ? 'Salvar alteraçções' : 'Editar'}</button>
                    </div>
                </div>

            </div>

        )
    }
}

export default AnimalDetailsRescue