import React from 'react'
import styles from './styles.module.css'

import AddVeterinaryCare from './../AddVeterinaryCare/index.jsx'
import VeterinaryCareTable from './../VeterinaryCareTable/index.jsx'


export default function DetailsVeterinary(){
    return(
        <div>
            <AddVeterinaryCare/>
            <VeterinaryCareTable/>
        </div>
    )
}
