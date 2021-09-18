import React from 'react'
import { MDBInput } from "mdbreact";
import axios from 'axios'

import styles from './styles.module.css'

import { baseApiUrl } from '../../services/baseApiUrl';
import {formatDate} from './../../common/commonFunctions.js'

export default function CollaboratorEditForm(props) {

    const [name, setName] = React.useState(props.collaborator.name);
    const [dateOfBirth, setDateOfBirth] = React.useState(formatDate(props.collaborator.dateOfBirth));
    const [city, setCity] = React.useState(props.collaborator.city);
    const [cellNumber, setCellNumber] = React.useState(props.collaborator.cellNumber);

    const updateCollaborator = async () => {
        await axios.put(`${baseApiUrl}/collaborator`, {
            collaborator: {
                id: props.collaborator.id,
                name,
                dateOfBirth,
                city,
                cellNumber
            }
        })
        .then(_ => {
            window.alert('Dados atualizados!')
            props.onCloseModal()
        })
        .catch(err => {
            console.log(err)
            window.alert('Erro ao atualizar dados!')
        })
    }

    return (
        <div className={styles.container}>
            <div>
                <span>Editando</span>
            </div>
            <div>
                <div>
                    <MDBInput label="Nome" outline
                        value={name} onChange={(e) => setName(e.target.value)}
                    />
                    <MDBInput label="Nascimento" outline
                        value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                    <MDBInput label="Cidade" outline
                        value={city} onChange={(e) => setCity(e.target.value)}
                    />
                    <MDBInput label="Telefone" outline
                        value={cellNumber} onChange={(e) => setCellNumber(e.target.value)}
                    />
                    <button className={styles.btnUpdate} onClick={() => updateCollaborator()}>
                        Salvar Alterações
                    </button>
                </div>
            </div>

        </div>
    )
}