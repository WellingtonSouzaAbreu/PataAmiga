import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import styles from './styles.module.css'
import CustomDatePicker from "../CustomDatePicker";

class AddTemporaryHome extends Component {

    render() {
        return (
            <div className={styles.container}>
                <Accordion
                    className={styles.acordion}
                >
                    <AccordionSummary 
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
                        <div className={styles.formTH}>
                            <CustomDatePicker/>
                            <div>
                                <MDBInput className={styles.inputRegister} label="Nome do voluntário" outline/>
                            </div>
                            <div>
                                <MDBInput className={styles.inputRegister} label="Telefone" outline  />
                            </div>
                            <div>
                                <MDBInput className={styles.inputRegister} label="Animal" outline   />
                            </div>
                            
                            <button className={styles.buttonSubmitForm} onClick={this.saveCollaborator}>
                                Cadastrar
                            </button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        )
    }
}

export default AddTemporaryHome