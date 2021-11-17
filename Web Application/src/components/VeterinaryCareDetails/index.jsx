import React from 'react'
import styles from './styles.module.css'

import AddVeterinaryCare from './../AddVeterinaryCare/index.jsx'
import VeterinaryCareTable from './../VeterinaryCareTable/index.jsx'


export default function DetailsVeterinary(props){
    return(
        <div>
            <AddVeterinaryCare animalId={props.animalId} onRefresh={props.onRefresh}/>
            <VeterinaryCareTable veterinaryCares={props.veterinaryCares} onDelete={props.onDelete} onRefresh={props.onRefresh}/>
        </div>
    )
}
