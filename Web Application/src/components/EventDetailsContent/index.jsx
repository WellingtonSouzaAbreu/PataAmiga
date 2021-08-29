import React from "react";

import styles from './styles.module.css'

import {formatDate, formatHour} from './../../common/commonFunctions.js'

function EventDetailsContent(props) {
    console.log(props.publication)

    const checkPublicationStatus = () => {
        if (Date.now() < new Date(props.publication.endDateTime)) {
            return 'Ativo'
        } else {
            return 'Encerrado'
        }
    }

    const publicationStatus = checkPublicationStatus()

    return (
        <div>
            <div className={styles.headerModal}>
                <span>{props.publication.title}</span>
            </div>
            <div className={styles.content}>
                <div>
                    <span>Descrição</span>
                    <p>{props.publication.description}</p>
                    {/* <p>In simple language, product cad means the card of product that is used to promote the specific product on the webpage. This is also called an e-commerce product card. There are various types of products we can found on the internet with different designs.</p> */}
                    <div className={styles.detailed}>
                        <div className={styles.detailedGroup}>
                            <div className={styles.itemDetail}>
                                <i className='bx bx-calendar-star bx-sm'></i>
                                <strong>Começa</strong>
                                <span>{formatDate(props.publication.startDateTime)}</span>
                                <span>{`${formatHour(props.publication.startDateTime)} horas`}</span>
                            </div>
                            <div className={styles.itemDetail}>
                                <i className='bx bxs-calendar-exclamation bx-sm' ></i>
                                <strong>Termina</strong>
                                <span>{formatDate(props.publication.endDateTime)}</span>
                                <span>{`${formatHour(props.publication.endDateTime)} horas`}</span>
                            </div>
                        </div>
                        <div className={styles.detailedGroupRow}>
                            <div className={styles.ItemDetailRow}>
                                <strong>Local</strong>
                                <div className={styles.rowDetail}>
                                    <i className='bx bx-current-location' ></i>
                                    <span>{props.publication.address}</span>
                                </div>
                            </div>
                            <div className={styles.ItemDetailRow}>
                                <strong>Bairro</strong>
                                <div className={styles.rowDetail}>
                                    <i className='bx bxs-directions'></i>
                                    <span>{props.publication.district}</span>
                                </div>
                            </div>
                            <div className={styles.ItemDetailRow}>
                                <strong>Cidade</strong>
                                <div className={styles.rowDetail}>
                                    <i className='bx bxs-city' ></i>
                                    <span>{props.publication.city}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.statsEvent}>
                        <strong>Status: </strong>
                        <strong className={publicationStatus == 'Ativo' ? styles.statusActive : styles.statusClose}>{publicationStatus}</strong>
                    </div>
                </div>
                <div>
                </div>

            </div>
        </div>
    )
}

export default EventDetailsContent