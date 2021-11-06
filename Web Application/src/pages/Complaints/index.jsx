import React, { Component } from "react"
import axios from 'axios'

import styles from './styles.module.css'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import ComplaintsTable from '../../components/ComplaintsTable/index.jsx'
import CustomSnackbar from '../../components/CustomSnackbar'

const initialState = {
    complaints: [],

    searchParam: '',
    rowsPerPage: 10,
    currentPage: 0,
    maxPageOpened: -1,

    snackbarVisible: false,
    snackbarMessage: '',
    snackbarType: 'info'
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
                this.toggleSnackbarVisibility(true, `Houve um erro ao obter denúncias!`, 'error')
            })
    }

    deleteComplaint = async (idComplaint) => {
        await axios.delete(`${baseApiUrl}/complaint/${idComplaint}`) // Array de id
            .then(_ => {
                const plural = idComplaint.length > 1 ? 's' : ''
                this.toggleSnackbarVisibility(true, `Denúncia${idComplaint.length > 1 ? 's' : ''} deletada${idComplaint.length > 1 ? 's' : ''} com sucesso!`, 'success')
                this.loadComplaints(true)
            })
            .catch(err => {
                console.log(err)
                window.alert(err)
                this.toggleSnackbarVisibility(true, `Houve um erro ao deletar denúncia!`, 'error')
            })
    }

    changePage = (dataField) => {
        let pageChanged = false

        if (dataField.currentPage) {
            pageChanged = dataField.currentPage > this.state.maxPageOpened
        }

        this.setState({ ...dataField, maxPageOpened: pageChanged ? dataField.currentField : this.state.maxPageOpened }, pageChanged ? this.loadComplaints : null)
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