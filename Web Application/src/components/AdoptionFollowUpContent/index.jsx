import React, { Component } from 'react'
import axios from 'axios'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import styles from './styles.module.css'

import { baseApiUrl } from '../../services/baseApiUrl';
import CustomSnackbar from './../CustomSnackbar'
import RemoteMonitoringTable from './../RemoteMonitoringTable';
import AdoptionVisitReportTable from './../AdoptionVisitReportTable';
import AddVisits from './../AddVisits'

const initialState = {
    remoteMonitorings: [],
    visits: [],

    visitDate: new Date(),
    visitReport: 'Foi louco',

    snackbarVisible: false,
    snackbarMessage: '',
    snackbarType: 'info',
}

class AdoptionFollowUpContent extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        const remoteMonitorings = await this.loadRemoteMonitorings()
        const visits = await this.loadVisits()

        this.setState({ remoteMonitorings, visits })
    }

    loadRemoteMonitorings = async () => {
        return await axios.get(`${baseApiUrl}/remote-monitoring/${this.props.idAdoption}`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Erro ao obter lista de monitoramentos remotos!`, err.response.status == 400 ? 'warning' : 'error')
            })
    }

    loadVisits = async () => {
        return await axios.get(`${baseApiUrl}/visit/${this.props.idAdoption}`)
            .then(res => {
                console.log(res.data)
                return res.data
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Erro ao obter lista de visitas!`, err.response.status == 400 ? 'warning' : 'error')
            })
    }

    changeVisitDate = (visitDate) => {
        this.setState({ visitDate })
    }

    changeVisitReport = (visitReport) => {
        this.setState({ visitReport })
    }

    saveVisitReport = async () => {
        const visitData = {
            report: this.state.visitReport,
            date: this.state.visitDate,
            adoptionId: this.props.idAdoption
        }
        await axios.post(`${baseApiUrl}/visit`, { visit: visitData })
            .then(async _ => {
                this.toggleSnackbarVisibility(true, `Visita cadastrada com sucesso!`, 'success')
                this.setState({ visits: await this.loadVisits() })
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Erro ao cadastrar relatório de visita!`, err.response.status == 400 ? 'warning' : 'error')
            })
    }

    deleteVisit = async (idVisit) => {
        await axios.delete(`${baseApiUrl}/visit/${idVisit}`) // Array de id
            .then(_ => {
                this.toggleSnackbarVisibility(true, `Visita${idVisit.length > 1 ? 's' : ''} deletada${idVisit.length > 1 ? 's' : ''} com sucesso!`, 'success')
                this.loadVisits()
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Erro ao deletar relatório de visita!`, err.response.status == 400 ? 'warning' : 'error')
            })
    }

    deleteRemoteMonitoring = async (idRemoteMonitoring) => {
        await axios.delete(`${baseApiUrl}/remote-monitoring/${idRemoteMonitoring}`) // Array de id
            .then(_ => {
                this.toggleSnackbarVisibility(true, `Monitoramento${idRemoteMonitoring.length > 1 ? 's' : ''} remoto${idRemoteMonitoring.length > 1 ? 's' : ''} deletado${idRemoteMonitoring.length > 1 ? 's' : ''} com sucesso!`, 'success')
                this.loadRemoteMonitorings()
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Erro ao deletar monitoramento remoto!`, err.response.status == 400 ? 'warning' : 'error')
            })
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
            <div>
                <CustomSnackbar visible={this.state.snackbarVisible} message={this.state.snackbarMessage} type={this.state.snackbarType} onClose={this.toggleSnackbarVisibility} />
                <Tabs >
                    <TabList className={styles.tabContainer}>
                        <Tab className={styles.tabs}>
                            <i className='bx bx-detail bx-sm'></i>
                            <span>Monitoramento</span>
                        </Tab>
                        <Tab className={styles.tabs}>
                            <i class='bx bx-plus-medical bx-sm' ></i>
                            <span>Visitas</span>
                        </Tab>
                    </TabList>

                    <TabPanel className={styles.tabContent}>
                        <RemoteMonitoringTable remoteMonitorings={this.state.remoteMonitorings} onDelete={this.deleteRemoteMonitoring} />
                    </TabPanel>
                    <TabPanel className={styles.tabContent}>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<i className='bx bx-down-arrow-alt'></i>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={styles.heading}>
                                    <i className='bx bxs-calendar-plus'></i>
                                    <span className={styles.spanAdjust}>Adicionar relatório de visita</span>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <AddVisits visitDate={this.state.visitDate} visitReport={this.state.visitReport} onChageVisitReport={this.changeVisitReport}
                                    onChangeDate={this.changeVisitDate} onRefresh={this.loadVisits} onSaveVisitReport={this.saveVisitReport} />

                            </AccordionDetails>
                        </Accordion>
                        <AdoptionVisitReportTable visits={this.state.visits} onDelete={this.deleteVisit} />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default AdoptionFollowUpContent



