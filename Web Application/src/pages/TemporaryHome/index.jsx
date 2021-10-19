import react, { Component } from 'react'
import axios from 'axios'

import styles from './styles.module.css'

import { baseApiUrl } from '../../services/baseApiUrl.js'
import AddTemporaryHome from './../../components/AddTemporaryHome'
import TemporaryHomeTable from './../../components/TemporaryHomeTable'

const initialState = {
    temporaryHomes: [],

    searchParam: '',
    rowsPerPage: 10,
    currentPage: 0,
    maxPageOpened: -1,
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
                window.alert('Ocorreu um erro ao buscar lares temporários!')
            })
    }

    deleteTemporaryHome = async (idTemporaryHome) => {
        await axios.delete(`${baseApiUrl}/temporary-home/${idTemporaryHome}`) // Array de id
            .then(_ => {
                window.alert(`Lar temporário deletado com sucesso!`)
                this.loadTemporaryHomes(true)
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

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.pageName}>
                    <span>LARES TEMPORÁRIOS</span>
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

