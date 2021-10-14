import React, { Component } from 'react'
import axios from 'axios'

import styles from './styles.module.css'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import AddEvent from "../../components/AddEvent";
import EventsTable from "../../components/EventsTable";

const initialState = {
    publicationsSummarized: [],

    searchParam: '',
    rowsPerPage: 10,
    currentPage: 0,
    maxPageOpened: -1,
     
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
                window.alert(err)
            })
    }

    deletePublication = async (idPublication) => {
        await axios.delete(`${baseApiUrl}/publication/${idPublication}`) // Array de id
            .then(_ => {
                window.alert('Publicação deletada com sucesso!')
                this.loadPublications(true)
            })
            .catch(err => {
                console.log(err)
                window.alert(err)
            })
    }

    changePage = (dataField) => {
        let pageChanged = false

        if (dataField.currentPage) {
            pageChanged = dataField.currentPage > this.state.maxPageOpened
        }

        this.setState({ ...dataField, maxPageOpened: pageChanged ? this.state.currentPage : this.state.maxPageOpened }, pageChanged ? this.loadPublications : null)
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

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.pageName}>
                    <span>PUBLICAÇÕES</span>
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