import React, { Component } from "react"
import axios from 'axios'

import styles from './styles.module.css'

import CollaboratorsTable from './../../components/CollaboratorsTable/index.jsx'
import AddCollaborator from './../../components/AddCollaborator/index.jsx'
import { baseApiUrl } from "../../services/baseApiUrl";

const initialState = {
    collaborators: [],

    searchParam: '',
    rowsPerPage: 10,
    currentPage: 0
}

class Collaborators extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        await this.loadCollaborators()
    }

    loadCollaborators = async () => {
        let filterParams = ''
        let page = '0'
        if (this.state.searchParam) {
            filterParams = `?name=${this.state.searchParam}`
        }

        if (this.state.currentPage || this.state.currentPage == 0) {
            page = `${filterParams ? '&' : '?'}page=${this.state.currentPage}`
        }

        let rowsPerPage = `${filterParams || page ? '&' : '?'}rowsPerPage=${this.state.rowsPerPage}`

        console.log(this.state)

        await axios(`${baseApiUrl}/collaborator${filterParams}${page}${rowsPerPage}`)
            .then(res => {
                console.log(res.data)
                this.setState({ collaborators: [...this.state.collaborators, ...res.data] })
            })
            .catch(err => {
                console.log(err)
                window.alert('Ocorreu um erro ao buscar collaboradores!')
            })
    }

    changePaginatorAndSearchParams = (dataField) => {
            this.setState({ ...dataField }, this.loadCollaborators)
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
                <AddCollaborator onRefresh={this.loadCollaborators} />
                <CollaboratorsTable collaborators={this.state.collaborators} rowsPerPage={this.state.rowsPerPage} onDelete={this.deleteCollaborator} onRefresh={this.loadCollaborators}
                    onChangePaginatorAndSearchParams={this.changePaginatorAndSearchParams}
                />
            </div>
        )
    }
}

export default Collaborators