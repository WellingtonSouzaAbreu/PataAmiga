import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios'

import styles from './styles.module.css'

import AnimalInfo from './../AnimalInfo/index.jsx';
import VeterinaryCareDetails from './../VeterinaryCareDetails'
import { baseApiUrl } from '../../services/baseApiUrl';

const initialState = {
    animal: {}
}

class AnimalDetailsContent extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        await this.loadAnimal()
    }

    loadAnimal = async () => {
        await axios.get(`${baseApiUrl}/animal/${/* this.props.idAnimal */1}/all-data`)
            .then(res => this.setState({ animal: res.data }))
            .catch(err => {
                console.log(err)
                window.alert('Occoreu um erro ao obter dados do animal!')
            })
    }

    render() {
        return (
            <div>
                <Tabs >
                    <TabList className={styles.tabContainer}>
                        <Tab className={styles.tabs}>
                            <i className='bx bx-detail bx-sm'></i>
                            <span>Informações do Animal</span>
                        </Tab>
                        <Tab className={styles.tabs}>
                            <i class='bx bx-plus-medical bx-sm' ></i>
                            <span>Cuidados Veterinários</span>
                        </Tab>
                    </TabList>

                    <TabPanel className={styles.tabContent}>
                        <AnimalInfo animal={this.state.animal} />
                    </TabPanel>
                    <TabPanel className={styles.tabContent}>
                        <VeterinaryCareDetails />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default AnimalDetailsContent

