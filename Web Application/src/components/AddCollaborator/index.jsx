import React from "react";
import styles from './styles.module.css'

import { MDBInput } from "mdbreact";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

export default function FormAddVolunteer(){
    return(
        <div className={styles.container}>
            <Accordion 
                className={styles.acordion}
            >
                <AccordionSummary
                    expandIcon={<i className='bx bx-down-arrow-alt'></i>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={styles.heading}>
                        <i className='bx bxs-calendar-plus'></i>
                        <span className={styles.spanAdjust}>Cadastrar Voluntários   </span>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <div className={styles.formVolunteers}>
                            <MDBInput className={styles.inputRegister} label="Nome" outline />
                            <MDBInput className={styles.inputRegister} label="Nascimento" outline />
                            <MDBInput className={styles.inputRegister} label="Cidade" outline />
                            <MDBInput className={styles.inputRegister} label="Telefone" outline />   
                            <button className={styles.buttonSubmitForm}>
                                Cadastrar
                            </button>
                        </div>
                </AccordionDetails>
            </Accordion>
        </div>   
     )
}