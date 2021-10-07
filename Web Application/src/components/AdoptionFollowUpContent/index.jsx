import React, { Component } from 'react'
import axios from 'axios'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { MDBInput } from "mdbreact";

import styles from './styles.module.css'

import { baseApiUrl } from '../../services/baseApiUrl';
import CustomDatePicker from './../CustomDatePicker';
import RemoteMonitoringTable from './../RemoteMonitoringTable';
import AdoptionVisitReportTable from './../AdoptionVisitReportTable';

const initialState = {
    remoteMonitorings: [],
    visits: []
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
    }

    loadVisits = async () => {
        return await axios.get(`${baseApiUrl}/visit/${this.props.idAdoption}`)
            .then(res => {
                console.log(res.data)
                return res.data
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
                        <RemoteMonitoringTable remoteMonitorings={this.state.remoteMonitorings} />
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
                                <div className={styles.formContainer}> {/* Add Visits */}
                                    <CustomDatePicker />
                                    <MDBInput type="textarea" label="Observações" className={styles.observations} />
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <AdoptionVisitReportTable visits={this.state.visits}/>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default AdoptionFollowUpContent



