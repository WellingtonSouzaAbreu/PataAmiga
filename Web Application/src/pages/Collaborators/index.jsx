import React, { Component } from "react"
import axios from 'axios'

import styles from './styles.module.css'

import CollaboratorsTable from './../../components/CollaboratorsTable/index.jsx'
import AddCollaborator from './../../components/AddCollaborator/index.jsx'
import { baseApiUrl } from "../../services/baseApiUrl";

const initialState = {
    collaborators: []
}

class Collaborators extends Component {

    state = {...initialState}

    componentDidMount = async () => {
        await this.loadCollaborators()
    }

    loadCollaborators = async () => {
        await axios(`${baseApiUrl}/collaborator`)
            .then(res => this.setState({ collaborators: res.data }))
            .catch(err => {
                console.log(err)
                window.alert('Ocorreu um erro ao buscar collaboradores!')
            })
    }

    deleteCollaborator = async (idCollaborator) => {
        await axios.delete(`${baseApiUrl}/collaborator/${idCollaborator}`) // Array de id
            .then(_ => {
                const plural = idCollaborator.length > 1 ? 'es' : '' // TODO Necessário? (Frase comum)
                window.alert(`Colaborador${plural} deletado${plural == 'es' ? 's' : ''} com sucesso!`)
            })
            .catch(err => {
                console.log(err)
                window.alert(err)
            })
    }

    render() {
        return (
            <div className={styles.container} >
                <div className={styles.pageName}>
                    <span onClick={this.loadCollaborators}>COLABORADORES</span>
                </div>
                <AddCollaborator onRefresh={this.loadCollaborators}/>
                <CollaboratorsTable collaborators={this.state.collaborators} onDelete={this.deleteCollaborator} onRefresh={this.loadCollaborators}/>
            </div>
        )
    }
}

export default Collaborators