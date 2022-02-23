import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios'

import styles from './styles.module.css'

import AnimalInfo from './../AnimalInfo/index.jsx';
import VeterinaryCareDetails from './../VeterinaryCareDetails'
import AnimalRescueDetails from '../AnimalRescueDetails';

import { baseApiUrl } from '../../services/baseApiUrl';
import CustomSnackbar from "./../CustomSnackbar";

const initialState = {
    animal: {
        extraInfo: {}
    },

    snackbarVisible: false,
    snackbarMessage: '',
    snackbarType: 'info'
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
                this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Houve um erro obter dados do animal!`, 'error')
            })
    }

    deleteVeterinaryCare = async (idVeterinaryCare) => {
        await axios.delete(`${baseApiUrl}/veterinary-care/${idVeterinaryCare}`) // Array de id
            .then(async _ => {
                this.toggleSnackbarVisibility(true, `Dado${idVeterinaryCare.length > 1 ? 's' : ''} veterinário${idVeterinaryCare.length > 1 ? 's' : ''} deletado${idVeterinaryCare.length > 1 ? 's' : ''} com sucesso!`, 'success')
                this.loadAnimal()
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Houve um erro ao deletar dado veterinário!`, 'error')
            })
    }

    toggleSnackbarVisibility = async (visibility, message, type) => {
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
                <div>
                    <Tabs selectedTabClassName={styles.selectedTab}>
                        <TabList className={styles.tabContainer}>
                            <Tab className={styles.tabs}>
                                <i class="fas fa-dog"></i>
                                <span>Informações do Animal</span>
                            </Tab>
                            <Tab className={styles.tabs}>
                            <i class="fas fa-stethoscope"></i>
                                <span>Cuidados Veterinários</span>
                            </Tab>
                            <Tab className={styles.tabs}>
                            <i class="fas fa-first-aid"></i>
                                <span>Informações do Resgate</span>
                            </Tab>
                        </TabList>

                        <TabPanel className={styles.tabContent}>
                            <AnimalInfo animal={this.state.animal} onRefresh={this.loadAnimal} />
                        </TabPanel>
                        <TabPanel className={styles.tabContent}>
                            <VeterinaryCareDetails veterinaryCares={this.state.animal.veterinaryCare}
                                animalId={this.state.animal.id} onRefresh={this.loadAnimal} onDelete={this.deleteVeterinaryCare} />
                        </TabPanel>
                        <TabPanel className={styles.tabContent}>
                            <AnimalRescueDetails rescue={this.state.animal.rescue} onRefresh={this.loadAnimal} />
                        </TabPanel>
                    </Tabs>
                </div>
            </>
        )
    }
}

export default AnimalDetailsContent

