import React from 'react'
import styles from './styles.module.css'

import { MDBInput } from "mdbreact";

export default function CollaboratorEditForm(){
    return(
        <div className={styles.container}>
            <div>
                <span>Editando</span>
            </div>
            <div>
                <div>
                    <MDBInput label="Nome" outline />
                    <MDBInput label="Nascimento" outline />
                    <MDBInput label="Cidade" outline />
                    <MDBInput label="Telefone" outline />
                    <button className={styles.btnUpdate}>
						Salvar Alterações
					</button>
                </div>
            </div>

        </div>
    )
}