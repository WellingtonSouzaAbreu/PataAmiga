import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

import styles from './styles.module.css'
import { baseApiUrl } from "../../services/baseApiUrl";

const initialState = {
    name: '',
    dateOfBirth: '2000-11-11',
    city: '',
    cellNumber: '',

    editMode: false
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

        if (this.props.collaborator.id) collaborator.id = this.props.collaborator.id

        await axios.post(`${baseApiUrl}/collaborator`, { collaborator })
            .then(_ => {
                window.alert('Colaborador registrado com sucesso!')
                this.props.edit
                    ? this.props.onRefresh(true)
                    : this.setState({ ...initialState }, () => this.props.onRefresh(true))
            })
            .catch(err => {
                console.log(err)
                window.alert(err)
            })
    }

    render() {
        return (
            <div className={styles.container}>
                <Accordion
                    className={styles.acordion}
                >
                    <AccordionSummary // TODO Iniciar expandido se o this.props.edit for true
                        expandIcon={<i className='bx bx-down-arrow-alt'></i>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={styles.heading} >
                            <i className='bx bxs-calendar-plus'></i>
                            <span className={styles.spanAdjust}>{this.props.edit ? 'Editar colaborador' : 'Cadastrar colaborador'}   </span>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <div className={styles.formVolunteers}>
                            <MDBInput className={styles.inputRegister} label="Nome" outline
                                value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}
                            />
                            <MDBInput className={styles.inputRegister} label="Nascimento" outline
                                value={this.state.dateOfBirth} onChange={(e) => this.setState({ dateOfBirth: e.target.value })}
                            />
                            <MDBInput className={styles.inputRegister} label="Cidade" outline
                                value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })}
                            />
                            <MDBInput className={styles.inputRegister} label="Telefone" outline
                                value={this.state.cellNumber} onChange={(e) => this.setState({ cellNumber: e.target.value })}
                            />
                            <button className={styles.buttonSubmitForm} onClick={this.saveCollaborator}>
                                {this.props.edit ? 'Salvar alterações' : 'Cadastrar'}
                            </button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        )
    }
}

export default AddCollaborator