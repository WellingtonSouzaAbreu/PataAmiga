import React from "react";
// import Button from '@material-ui/core/Button';

import styles from './styles.module.css'

import AddEvent from "../../components/AddEvent";
import EventTable from "../../components/EventTable";

export default function EventsPage(){
    return(
        <div className={styles.container}>
            <div className={styles.pageName}>
                <span>PUBLICAÇÕES</span>
            </div>
            <div className={styles.addEvent}>
                <AddEvent/>
            </div>
            <div className={styles.registerEvents}>
                <EventTable/>
            </div>
        </div>
    )
}