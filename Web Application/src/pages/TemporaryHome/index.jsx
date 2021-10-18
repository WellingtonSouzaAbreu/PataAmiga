import react, { Component } from 'react'
import axios from 'axios'

import styles from './styles.module.css'

import { baseApiUrl } from '../../services/baseApiUrl.js'
import AddTemporaryHome from './../../components/AddTemporaryHome'
import TemporaryHomeTable from './../../components/TemporaryHomeTable'

const initialState = {
    temporaryHomes: []
}

class TemporaryHome extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        await this.loadTemporaryHomes()
    }

    loadTemporaryHomes = async () => {
        await axios(`${baseApiUrl}/temporary-home`)
            .then(res => {
                console.log(res.data)
                this.setState({ temporaryHomes: res.data })
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

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.pageName}>
                    <span>LARES TEMPORÁRIOS</span>
                </div>
                <div className={styles.tableContainer}>
                    <AddTemporaryHome/>
                    <TemporaryHomeTable temporaryHomes={this.state.temporaryHomes} onDelete={this.deleteTemporaryHome} />
                </div>
            </div>
        )
    }
}

export default TemporaryHome

