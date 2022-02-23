import react, { Component } from 'react'
import axios from 'axios'

import styles from './styles.module.css'

import { baseApiUrl } from '../../services/baseApiUrl.js'
import CustomSnackbar from '../../components/CustomSnackbar'
import AddTemporaryHome from './../../components/AddTemporaryHome'
import TemporaryHomeTable from './../../components/TemporaryHomeTable'

const initialState = {
    temporaryHomes: [],

    searchParam: '',
    rowsPerPage: 10,
    currentPage: 0,
    maxPageOpened: -1,

    snackbarVisible: false,
    snackbarMessage: '',
    snackbarType: 'info'
}

class TemporaryHome extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        await this.loadTemporaryHomes()
    }

    loadTemporaryHomes = async (noConcat) => {
        let filterParams = ''
        let page = '0'
        if (this.state.searchParam) {
            filterParams = `?animalName=${this.state.searchParam}`
        }

        if (this.state.currentPage || this.state.currentPage == 0) {
            page = `${filterParams ? '&' : '?'}page=${this.state.currentPage}`
        }

        let rowsPerPage = `${filterParams || page ? '&' : '?'}rowsPerPage=${this.state.rowsPerPage}`

        await axios.get(`${baseApiUrl}/temporary-home${filterParams}${page}${rowsPerPage}`)
            .then(res => {
                console.log(res.data)
                noConcat ? this.setState({ temporaryHomes: [...res.data] }) : this.setState({ temporaryHomes: [...this.state.temporaryHomes, ...res.data] })
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, `Houve um erro ao obter lares temporários!`, 'error')
            })
    }

    deleteTemporaryHome = async (idTemporaryHome) => {
        await axios.delete(`${baseApiUrl}/temporary-home/${idTemporaryHome}`) // Array de id
            .then(_ => {
                this.toggleSnackbarVisibility(true, `Lar${idTemporaryHome.length > 1 ? 'es' : ''} temporário${idTemporaryHome.length > 1 ? 's' : ''} deletado${idTemporaryHome.length > 1 ? 's' : ''} com sucesso!`, 'success')
                this.loadTemporaryHomes(true)
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, `Houve um erro ao deletar lar temporário!`, 'error')
            })
    }

    changePage = (dataField) => {
        let pageChanged = false

        if (dataField.currentPage) {
            pageChanged = dataField.currentPage > this.state.maxPageOpened
        }

        this.setState({ ...dataField, maxPageOpened: pageChanged ? dataField.currentPage : this.state.maxPageOpened }, pageChanged ? this.loadTemporaryHomes : null)
    }

    changeRowsPerPage = (dataField) => {
        let rowsPerPageChanged = false

        if (dataField.rowsPerPage && dataField.rowsPerPage != this.state.rowsPerPage) {
            rowsPerPageChanged = true
            dataField = { ...dataField, currentPage: 0, maxPageOpened: -1 }
        }

        this.setState({ ...dataField, temporaryHomes: rowsPerPageChanged ? [] : this.state.temporaryHomes }, this.loadTemporaryHomes)
    }

    changeSearchParams = (dataField) => {
        this.setState({ ...dataField, temporaryHomes: [], currentPage: 0 }, this.loadTemporaryHomes)
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
                <div className={styles.pageName} onClick={this.loadTemporaryHomes}>
                    <span className={styles.title}>LARES TEMPORÁRIOS</span>
                </div>
                <div className={styles.tableContainer}>
                    <AddTemporaryHome onRefresh={this.loadTemporaryHomes} />
                    <TemporaryHomeTable temporaryHomes={this.state.temporaryHomes} onRefresh={this.loadTemporaryHomes} onDelete={this.deleteTemporaryHome}
                        currentPage={this.state.currentPage} rowsPerPage={this.state.rowsPerPage}
                        onChangePage={this.changePage} onChangeRowsPerPage={this.changeRowsPerPage}
                        onChangeSearchParams={this.changeSearchParams} onDelete={this.deleteTemporaryHome} />
                </div>
            </div>
        )
    }
}

export default TemporaryHome

