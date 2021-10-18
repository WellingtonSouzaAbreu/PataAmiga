import React, { Component } from 'react'
import axios from 'axios'

import styles from './styles.module.css'

import { baseApiUrl } from '../../services/baseApiUrl.js'
import InterestedTable from "./../../components/InterestedTable";

const initialState = {
    interestedsInAdopt: [],

    searchParam: '',
    rowsPerPage: 10,
    currentPage: 0,
    maxPageOpened: -1,

}

class Interesteds extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        await this.loadInterestedsInAdopt()
    }

    loadInterestedsInAdopt = async (noConcat) => {
        let filterParams = ''
        let page = '0'
        if (this.state.searchParam) {
            filterParams = `?animalName=${this.state.searchParam}`
        }

        if (this.state.currentPage || this.state.currentPage == 0) {
            page = `${filterParams ? '&' : '?'}page=${this.state.currentPage}`
        }

        let rowsPerPage = `${filterParams || page ? '&' : '?'}rowsPerPage=${this.state.rowsPerPage}`

        await axios.get(`${baseApiUrl}/interesteds-in-adoption/${filterParams}${page}${rowsPerPage}`)
            .then(res => {
                console.log(res.data)
                noConcat ? this.setState({ interestedsInAdopt: [...res.data] }) : this.setState({ interestedsInAdopt: [...this.state.interestedsInAdopt, ...res.data] })
            })
            .catch(err => {
                console.log(err)
                window.alert(err)
            })
    }

    toggleStateOfInterest = async(interestVerified, idInterested) => {
        await axios.put(`${baseApiUrl}/interesteds-in-adoption/toggle-state`, {verified: interestVerified ? 1 : 0, idInterested})
        .then(res => {
            console.log(res.data)
            this.loadInterestedsInAdopt(true)
        })
        .catch(err => {
            console.log(err)
            window.alert(err)
        })
    }

    deleteInterested = async (idInterested) => {
        await axios.delete(`${baseApiUrl}/interesteds-in-adoption/${idInterested}`) // Array de id
            .then(_ => {
                window.alert('Interessado deletado com sucesso!')
                this.loadInterestedsInAdopt(true)
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

        this.setState({ ...dataField, maxPageOpened: pageChanged ? this.state.currentPage : this.state.maxPageOpened }, pageChanged ? this.loadInterestedsInAdopt : null)
    }

    changeRowsPerPage = (dataField) => {
        let rowsPerPageChanged = false

        if (dataField.rowsPerPage && dataField.rowsPerPage != this.state.rowsPerPage) {
            rowsPerPageChanged = true
            dataField = { ...dataField, currentPage: 0, maxPageOpened: -1 }
        }

        this.setState({ ...dataField, interestedsInAdopt: rowsPerPageChanged ? [] : this.state.interestedsInAdopt }, this.loadInterestedsInAdopt)
    }

    changeSearchParams = (dataField) => {
        this.setState({ ...dataField, interestedsInAdopt: [], currentPage: 0 }, this.loadInterestedsInAdopt)
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.pageName}>
                    <span>INTERESSADOS</span>
                </div>
                <div className={styles.tableContainer}>
                    <InterestedTable interestedsInAdopt={this.state.interestedsInAdopt} currentPage={this.state.currentPage} rowsPerPage={this.state.rowsPerPage}
                        onRefresh={this.loadInterestedsInAdopt} onChangePage={this.changePage} onChangeRowsPerPage={this.changeRowsPerPage}
                        onChangeSearchParams={this.changeSearchParams} onDelete={this.deleteInterested} onToggleStateOfInterest={this.toggleStateOfInterest}/>
                </div>
            </div>
        )
    }
}

export default Interesteds