import React, { Component } from 'react'
import axios from 'axios'
import styles from './styles.module.css'

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import {baseApiUrl} from './../../services/baseApiUrl.js'
import StepGroupAnimalRegister from './../../components/StepGroupAnimalRegister/index.jsx';
import AnimalsTable from './../../components/AnimalsTable/index.jsx'

const initialState = {
    animals: []
}

export default class Animals extends Component {

    state = { ...initialState }

    componentDidMount = async() => {
        await this.loadAnimals()
    }

    loadAnimals = async () => {
        await axios.get(`${baseApiUrl}/animal`)
            .then(res => this.setState({ animals: res.data }))
            .catch(err => {
                console.log(err)
                window.alert(!!err.response ? err.response.data : "Erro ao obter animais!")
            })
    }

    deleteAnimal = async (idAnimal) => {
        await axios.delete(`${baseApiUrl}/animal/${idAnimal}`) // Array de id
            .then(_ => {
                window.alert('Animal deletado com sucesso!')
            })
            .catch(err => {
                console.log(err)
                window.alert(err)
            })
    }

    render() {
        return (
            <div className={styles.container} >
                <Accordion >
                    <AccordionSummary
                        expandIcon={<i className='bx bx-down-arrow-alt'></i>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={styles.heading}>
                            <i className='bx bxs-calendar-plus'></i>
                            <span className={styles.spanAdjust}>Adicionar Animal</span>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <StepGroupAnimalRegister onRefresh={this.loadAnimals}/>
                    </AccordionDetails>
                </Accordion>
                <AnimalsTable animals={this.state.animals} onDelete={this.deleteAnimal}/>
            </div>
        )
    }
}