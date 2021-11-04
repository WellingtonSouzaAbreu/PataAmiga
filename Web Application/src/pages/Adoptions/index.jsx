import React, { Component } from "react";
import axios from 'axios'

import styles from './styles.module.css'
import AddAdoption from "../../components/AddAdoption";

import { baseApiUrl } from './../../services/baseApiUrl.js'
import AdoptionsTable from "../../components/AdoptionTable";

const initialState = {
    adoptions: [],

    searchParam: '',
    rowsPerPage: 10,
    currentPage: 0,
    maxPageOpened: 0
}

class Adoptions extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        await this.loadAdoptions()
    }

    loadAdoptions = async (noConcat) => {
        let filterParams = ''
        let page = '0'
        if (this.state.searchParam) {
            filterParams = `?animalName=${this.state.searchParam}`
        }

        if (this.state.currentPage || this.state.currentPage == 0) {
            page = `${filterParams ? '&' : '?'}page=${this.state.currentPage}`
        }

        let rowsPerPage = `${filterParams || page ? '&' : '?'}rowsPerPage=${this.state.rowsPerPage}`

        await axios(`${baseApiUrl}/adoption${filterParams}${page}${rowsPerPage}`)
            .then(res => {
                console.log(res.data)
                noConcat ? this.setState({ adoptions: [...res.data] }) : this.setState({ adoptions: [...this.state.adoptions, ...res.data] })
            })
            .catch(err => {
                console.log(err)
                window.alert('Ocorreu um erro ao buscar adoções!')
            })
    }

    deleteAdoption = async (idAdoption) => {
        await axios.delete(`${baseApiUrl}/adoption/${idAdoption}`) // Array de id
            .then(_ => {
                window.alert(`Adoção deletada com sucesso!`)
                this.loadAdoptions(true)
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

        this.setState({ ...dataField, maxPageOpened: pageChanged ? dataField.currentPage : this.state.maxPageOpened }, pageChanged ? this.loadAdoptions : null)
    }

    changeRowsPerPage = (dataField) => {
        let rowsPerPageChanged = false

        if (dataField.rowsPerPage && dataField.rowsPerPage != this.state.rowsPerPage) {
            rowsPerPageChanged = true
            dataField = { ...dataField, currentPage: 0, maxPageOpened: -1 }
        }

        this.setState({ ...dataField, adoptions: rowsPerPageChanged ? [] : this.state.adoptions }, this.loadAdoptions)
    }

    changeSearchParams = (dataField) => {
        this.setState({ ...dataField, adoptions: [], currentPage: 0 }, this.loadAdoptions)
    }

    render() {
        return (
            <div className={styles.container} >
                <div className={styles.pageName} onClick={this.loadAdoptions}>
                    <span>ADOÇÕES</span>
                </div>
                <AddAdoption onRefresh={this.loadAdoptions}/>
                <AdoptionsTable adoptions={this.state.adoptions} currentPage={this.state.currentPage} rowsPerPage={this.state.rowsPerPage}
                    onDelete={this.deleteAdoption} onRefresh={this.loadAdoptions}
                    onChangePage={this.changePage} onChangeRowsPerPage={this.changeRowsPerPage} onChangeSearchParams={this.changeSearchParams} />
            </div>
        )
    }
}

export default Adoptions