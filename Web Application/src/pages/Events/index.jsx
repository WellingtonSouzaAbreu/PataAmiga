import React, { Component } from 'react'
import axios from 'axios'

import styles from './styles.module.css'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import AddEvent from "../../components/AddEvent";
import EventsTable from "../../components/EventsTable";

const initialState = {
    publicationsSummarized: [],
}

class Events extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        await this.loadPublications()
    }

    loadPublications = async () => {
        await axios.get(`${baseApiUrl}/publication/summarized`)
            .then(res => {
                console.log(res.data)
                this.setState({ publicationsSummarized: res.data })
            })
            .catch(err => {
                console.log(err)
                window.alert(err)
            })
    }

    deletePublication = async (idPublication) => {
        await axios.delete(`${baseApiUrl}/publication/${idPublication}`) // Array de id
            .then(_ => {
                window.alert('Publicação deletada com sucesso!')
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
                    <span>PUBLICAÇÕES</span>
                </div>
                <div className={styles.addEvent}>
                    <AddEvent onRefresh={this.loadPublications}/>
                </div>
                <div className={styles.registerEvents}>
                    <EventsTable publications={this.state.publicationsSummarized} onDelete={this.deletePublication} />
                </div>
            </div>
        )
    }
}

export default Events