import React, { Component } from 'react'
import axios from 'axios'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import styles from './styles.module.css'

import { baseApiUrl } from '../../services/baseApiUrl';
import RemoteMonitoringTable from './../RemoteMonitoringTable';
import AdoptionVisitReportTable from './../AdoptionVisitReportTable';
import AddVisits from './../AddVisits'

const initialState = {
    remoteMonitorings: [],
    visits: [],

    // Visit
    visitDate: new Date(),
    visitReport: 'Foi louco',
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
            .catch(err => window.alert(err))
    }

    loadVisits = async () => {
        return await axios.get(`${baseApiUrl}/visit/${this.props.idAdoption}`)
            .then(res => {
                console.log(res.data)
                return res.data
            })
            .catch(err => window.alert(err))
    }

    changeVisitDate = (visitDate) => {
        this.setState({ visitDate })
    }

    changeVisitReport = (visitReport) => {
        this.setState({visitReport})
    }

    saveVisitReport = async() => {
        const visitData = {
            report: this.state.visitReport,
            date: this.state.visitDate,
            adoptionId: this.props.idAdoption
        }
        await axios.post(`${baseApiUrl}/visit`, {visit: visitData})
        .then(_ => {
            window.alert('Visita salva com sucesso!')
            this.loadVisits()
        })
        .catch(err => window.alert(err.response.data))
    }

    deleteVisit = async (idVisit) => {
        await axios.delete(`${baseApiUrl}/visit/${idVisit}`) // Array de id
            .then(_ => {
                const plural = idVisit.length > 1 ? 'es' : ''
                window.alert(`Visit${plural} deletado${plural == 'es' ? 's' : ''} com sucesso!`)
                this.loadVisits()
            })
            .catch(err => {
                console.log(err)
                window.alert(err)
            })
    }

    deleteRemoteMonitoring = async (idRemoteMonitoring) => {
        await axios.delete(`${baseApiUrl}/remote-monitoring/${idRemoteMonitoring}`) // Array de id
            .then(_ => {
                const plural = idRemoteMonitoring.length > 1 ? 'es' : ''
                window.alert(`Monitoramento${plural} remoto deletado${plural == 'es' ? 's' : ''} com sucesso!`)
                this.loadRemoteMonitorings()
            })
            .catch(err => {
                console.log(err)
                window.alert(err)
            })
    }

    render() {
        return (
            <div>
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
                        <RemoteMonitoringTable remoteMonitorings={this.state.remoteMonitorings} onDelete={this.deleteRemoteMonitoring}/>
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
                                onChangeDate={this.changeVisitDate} onRefresh={this.loadVisits} onSaveVisitReport={this.saveVisitReport}/>
                                
                            </AccordionDetails>
                        </Accordion>
                        <AdoptionVisitReportTable visits={this.state.visits} onDelete={this.deleteVisit}/>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default AdoptionFollowUpContent



