import react from 'react'
import { MDBInput } from "mdbreact";

import styles from './styles.module.css'

import CustomDatePicker from './../CustomDatePicker';


const AddVisits = (props) => {
    return (
        <div className={styles.formContainer}> {/* Add Visits */}
            <CustomDatePicker label={'Dia da visita'} value={props.visitDate} onChangeDate={props.onChangeDate} />
            <MDBInput type="textarea" label="Observações" className={styles.observations}
                value={props.visitReport} onChange={e => props.onChageVisitReport(e.target.value)}
            />
            <button onClick={props.onSaveVisitReport}>Salvar</button> // TODO provisório
        </div>
    )
}

export default AddVisits