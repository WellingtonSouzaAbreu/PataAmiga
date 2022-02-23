import React, { Component } from 'react'
import axios from 'axios'
import styles from './styles.module.css'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import CustomSnackbar from './../../components/CustomSnackbar'
import AddAnimal from './../../components/AddAnimal/index.jsx';
import AnimalsTable from './../../components/AnimalsTable/index.jsx'

const initialState = {
    animals: [],

    snackbarVisible: false,
    snackbarMessage: '',
    snackbarType: 'info'
}

export default class Animals extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        await this.loadAnimals()
    }

    loadAnimals = async () => {
        await axios.get(`${baseApiUrl}/animal`)
            .then(res => this.setState({ animals: res.data }))
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, `Houve um erro ao obter animais!`, 'error')
            })
    }

    deleteAnimal = async (idAnimal) => {
        await axios.delete(`${baseApiUrl}/animal/${idAnimal}`) // Array de id
            .then(_ => {
                this.toggleSnackbarVisibility(true, `Anima${idAnimal.length > 1 ? 'is' : ''} deletado${idAnimal.length > 1 ? 's' : ''} com sucesso!`, 'success')
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, `Houve um erro ao deletar animal!`, 'error')
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
            <div className={styles.container} >
                <CustomSnackbar visible={this.state.snackbarVisible} message={this.state.snackbarMessage} type={this.state.snackbarType} onClose={this.toggleSnackbarVisibility} />
                <div className={styles.pageName} onClick={this.loadAnimals}>
                    <span className={styles.title}>ANIMAIS</span>
                </div>
                <AddAnimal onRefresh={this.loadAnimals} />
                <AnimalsTable animals={this.state.animals} onDelete={this.deleteAnimal} onRefresh={this.loadAnimals} />
            </div>
        )
    }
}