import React, { Component } from "react"
import axios from 'axios'

import styles from './styles.module.css'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import ComplaintsTable from '../../components/ComplaintsTable/index.jsx'

const initialState = {
    complaints: [],

    searchParam: '',
    rowsPerPage: 10,
    currentPage: 0,
    maxPageOpened: -1
}

class Report extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        await this.loadComplaints()
    }

    loadComplaints = async (noConcat) => {
        let filterParams = ''
        let page = '0'
        if (this.state.searchParam) {
            filterParams = `?city=${this.state.searchParam}`
        }

        if (this.state.currentPage || this.state.currentPage == 0) {
            page = `${filterParams ? '&' : '?'}page=${this.state.currentPage}`
        }

        let rowsPerPage = `${filterParams || page ? '&' : '?'}rowsPerPage=${this.state.rowsPerPage}`

        await axios.get(`${baseApiUrl}/complaint${filterParams}${page}${rowsPerPage}`)
            .then(res => {
                noConcat ? this.setState({ complaints: [...res.data] }) : this.setState({ complaints: [...this.state.complaints, ...res.data] })
            })
            .catch(err => {
                console.log(err)
                window.alert('Ops! Erro ao obter denúncias!')
            })
    }

    deleteComplaint = async (idComplaint) => {
        await axios.delete(`${baseApiUrl}/complaint/${idComplaint}`) // Array de id
            .then(_ => {
                const plural = idComplaint.length > 1 ? 's' : ''
                window.alert(`Denúncia${plural} deletada${plural} com sucesso!`)
                this.loadComplaints(true)
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

        this.setState({ ...dataField, maxPageOpened: pageChanged ? this.state.currentPage : this.state.maxPageOpened }, pageChanged ? this.loadComplaints : null)
    }

    changeRowsPerPage = (dataField) => {
        let rowsPerPageChanged = false

        if (dataField.rowsPerPage && dataField.rowsPerPage != this.state.rowsPerPage) {
            rowsPerPageChanged = true
            dataField = { ...dataField, currentPage: 0, maxPageOpened: -1 }
        }

        this.setState({ ...dataField, complaints: rowsPerPageChanged ? [] : this.state.complaints }, this.loadComplaints)
    }

    changeSearchParams = (dataField) => {
        this.setState({ ...dataField, complaints: [], currentPage: 0 }, this.loadComplaints)
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.pageName}>
                    <span onClick={this.loadComplaints}>DENÚNCIAS</span>
                </div>
                <div className={styles.containerTable}>
                    <ComplaintsTable complaints={this.state.complaints} currentPage={this.state.currentPage} rowsPerPage={this.state.rowsPerPage}
                        onDelete={this.deleteComplaint} onRefresh={this.loadComplaints}
                        onChangePage={this.changePage} onChangeRowsPerPage={this.changeRowsPerPage} onChangeSearchParams={this.changeSearchParams} />
                </div>
            </div>
        )
    }
}

export default Report