import React, { Component } from "react"
import axios from 'axios'

import styles from './styles.module.css'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import ComplaintsTable from '../../components/ComplaintsTable/index.jsx'

const initialState = {
    reports: []
}

class Report extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        await this.loadComplaints()
    }

    loadComplaints = async () => {
        await axios.get(`${baseApiUrl}/complaint`)
            .then(res => {
                this.setState({ complaints: res.data })
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
                    <span onClick={this.loadComplaints}>DENÚNCIAS</span>
                </div>
                <div className={styles.containerTable}>
                    <ComplaintsTable complaints={this.state.complaints} onDelete={this.deleteComplaint} onRefresh={this.loadComplaints} />
                </div>
            </div>
        )
    }
}

export default Report