import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios'

import styles from './styles.module.css'

import AnimalInfo from './../AnimalInfo/index.jsx';
import VeterinaryCareDetails from './../VeterinaryCareDetails'
import AnimalRescueDetails from '../AnimalRescueDetails';

import { baseApiUrl } from '../../services/baseApiUrl';

const initialState = {
    animal: {
        extraInfo: {}
    }
}

class AnimalDetailsContent extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        await this.loadAnimal()
    }

    loadAnimal = async () => {
        await axios.get(`${baseApiUrl}/animal/${this.props.idAnimal}/all-data`)
            .then(res => this.setState({ animal: res.data }))
            .catch(err => {
                console.log(err)
                window.alert('Occoreu um erro ao obter dados do animal!')
            })
    }

    deleteVeterinaryCare = async (idVeterinaryCare) => {
        await axios.delete(`${baseApiUrl}/veterinary-care/${idVeterinaryCare}`) // Array de id
            .then(_ => {
                window.alert('Cuidado veterinário deletado com sucesso!')
            })
            .catch(err => {
                console.log(err)
                window.alert(err)
            })
    }

    render() {
        return (
            <div>
                <Tabs >
                    <TabList className={styles.tabContainer}>
                        <Tab className={styles.tabs}>
                            <i className='bx bx-detail bx-sm'></i> {/* TODO tem como deixar a aba selecionada destacada? */}
                            <span>Informações do Animal</span>
                        </Tab>
                        <Tab className={styles.tabs}>
                            <i className='bx bx-plus-medical bx-sm' ></i>
                            <span>Cuidados Veterinários</span>
                        </Tab>
                        <Tab className={styles.tabs}>
                        <i class='bx bxl-flutter bx-sm'></i>
                            <span>Informações do Resgate</span>
                        </Tab>
                    </TabList>

                    <TabPanel className={styles.tabContent}>
                        <AnimalInfo animal={this.state.animal} onRefresh={this.loadAnimal} />
                    </TabPanel>
                    <TabPanel className={styles.tabContent}>
                        <VeterinaryCareDetails veterinaryCares={this.state.animal.veterinaryCare}
                            animalId={this.state.animal.id} onRefresh={this.loadAnimal} onDelete={this.deleteVeterinaryCare}/>
                    </TabPanel>
                    <TabPanel className={styles.tabContent}>
                       <AnimalRescueDetails rescue={this.state.animal.rescue} onRefresh={this.loadAnimal} />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default AnimalDetailsContent

