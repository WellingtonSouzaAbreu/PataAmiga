import React, { Component } from 'react'
import axios from 'axios'

import styles from './styles.module.css'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import CustomSnackbar from '../../components/CustomSnackbar'
import AddEvent from '../../components/AddEvent';
import EventsTable from '../../components/EventsTable';

const initialState = {
    publicationsSummarized: [],

    searchParam: '',
    rowsPerPage: 10,
    currentPage: 0,
    maxPageOpened: -1,

    snackbarVisible: false,
    snackbarMessage: '',
    snackbarType: 'info'
}

class Events extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        await this.loadPublications()
    }

    loadPublications = async (noConcat) => {
        let filterParams = ''
        let page = '0'
        if (this.state.searchParam) {
            filterParams = `?title=${this.state.searchParam}`
        }

        if (this.state.currentPage || this.state.currentPage == 0) {
            page = `${filterParams ? '&' : '?'}page=${this.state.currentPage}`
        }

        let rowsPerPage = `${filterParams || page ? '&' : '?'}rowsPerPage=${this.state.rowsPerPage}`

        await axios.get(`${baseApiUrl}/publication/summarized${filterParams}${page}${rowsPerPage}`)
            .then(res => {
                console.log(res.data)
                noConcat ? this.setState({ publicationsSummarized: [...res.data] }) : this.setState({ publicationsSummarized: [...this.state.publicationsSummarized, ...res.data] })
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, `Houve um erro ao obter publicações!`, 'error')
            })
    }

    deletePublication = async (idPublication) => {
        await axios.delete(`${baseApiUrl}/publication/${idPublication}`) // Array de id
            .then(async _ => {
                 this.toggleSnackbarVisibility(true, `Publicaç${idPublication.length > 1 ? 'ões' : 'ão'} deletada${idPublication.length > 1 ? 's' : ''} com sucesso!`, 'success')
                setTimeout(() => {
                    this.loadPublications(true)
                }, 1000)
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, `Houve um erro ao deletar publicação!`, 'error')
            })
    }

    changePage = (dataField) => {
        let pageChanged = false

        if (dataField.currentPage) {
            pageChanged = dataField.currentPage > this.state.maxPageOpened
        }

        this.setState({ ...dataField, maxPageOpened: pageChanged ? dataField.currentPage : this.state.maxPageOpened }, pageChanged ? this.loadPublications : null)
    }

    changeRowsPerPage = (dataField) => {
        let rowsPerPageChanged = false

        if (dataField.rowsPerPage && dataField.rowsPerPage != this.state.rowsPerPage) {
            rowsPerPageChanged = true
            dataField = { ...dataField, currentPage: 0, maxPageOpened: -1 }
        }

        this.setState({ ...dataField, publicationsSummarized: rowsPerPageChanged ? [] : this.state.publicationsSummarized }, this.loadPublications)
    }

    changeSearchParams = (dataField) => {
        this.setState({ ...dataField, publicationsSummarized: [], currentPage: 0 }, this.loadPublications)
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
            <div className={styles.container}>
                 <CustomSnackbar visible={this.state.snackbarVisible} message={this.state.snackbarMessage} type={this.state.snackbarType} onClose={this.toggleSnackbarVisibility} />
                <div className={styles.pageName} onClick={this.loadPublications}>
                    <span className={styles.title}>PUBLICAÇÕES</span>
                </div>
                <div className={styles.addEvent}>
                    <AddEvent onRefresh={this.loadPublications} />
                </div>
                <div className={styles.registerEvents}>
                    <EventsTable publications={this.state.publicationsSummarized} currentPage={this.state.currentPage} rowsPerPage={this.state.rowsPerPage}
                        onRefresh={this.loadPublications} onChangePage={this.changePage} onChangeRowsPerPage={this.changeRowsPerPage}
                        onChangeSearchParams={this.changeSearchParams} onDelete={this.deletePublication}
                    />
                </div>
            </div>
        )
    }
}

export default Events