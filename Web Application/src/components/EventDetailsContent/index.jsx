import React, { Component } from "react";

import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
} from 'mdb-react-ui-kit';

import styles from './styles.module.css'

import { formatDate, formatHour } from './../../common/commonFunctions.js'
import { baseApiUrl } from "../../services/baseApiUrl";

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

    function renderEventDetails() {

        return (
            <>
                <div className={styles.headerModal}>
                    <span>{props.publication.title}</span>
                </div>
                <div className={styles.content}>
                    <div className={styles.eventDescription}>
                        <div>
                            <MDBCarousel showIndicators showControls fade className={styles.carouselImages}>
                                <MDBCarouselInner>
                                    {renderPublicationImages()}
                                </MDBCarouselInner>
                            </MDBCarousel>
                        </div>
                        <div className={styles.description}>
                            <span>Descrição</span>
                            <p>{props.publication.description}</p>
                        </div>
                    </div>

                    <div className={styles.detailed}>
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
                        <div className={styles.statsEvent}>
                            <strong>Status: </strong>
                            <strong className={publicationStatus == 'Ativo' ? styles.statusActive : styles.statusClose}>{publicationStatus}</strong>
                        </div>

                    </div>
                    <div>
                    </div>

                </div>
            </>

        )
    }


    function renderPublicationImages() {
        let carouselItems = []
        props.publication.imagesURL.map(({imageURL}, index) => {
            console.log(`${baseApiUrl}/publication-pictures/${imageURL}`)
            carouselItems.push(
                <MDBCarouselItem itemId={index}>
                    <MDBCarouselElement src={`${baseApiUrl}/publication-pictures/${imageURL}`} alt='...' />
                </MDBCarouselItem>
            )
        })

        return carouselItems
    }

    let desc = "Lorem Ipsum is simply dummy tLorem Ipsum Lorem Ipsum is simply dummy tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with theext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with theis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with theext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the"
    function renderHistoryDetails() {
        return (
            <>
                <div className={styles.headerModal}>
                    <span>{props.publication.title}</span>
                </div>
                <div className={styles.contentHistory}>
                    <div className={styles.pubDescription}>
                        <div className={styles.carouselDiv}>
                            <MDBCarousel showIndicators showControls fade className={styles.carouselImages}>
                                <MDBCarouselInner>
                                    {renderPublicationImages()}
                                </MDBCarouselInner>
                            </MDBCarousel>
                        </div>
                        <div className={styles.infoAnimalH}>
                            <div>
                                <div>
                                    <strong>Nome</strong>
                                    <span>Chicó</span>
                                </div>
                                <div>
                                    <strong>Razao do Resgate</strong>
                                    <span>Abandono</span>
                                </div>
                                <div className={styles.endPublication}>
                                    <div className={styles.itemDetail}>
                                        <i className='bx bxs-calendar-exclamation bx-sm' ></i>
                                        <strong>Publicação visível até:</strong>
                                        <span>{formatDate(props.publication.endDateTime)}</span>
                                        <span>{`${formatHour(props.publication.endDateTime)} horas`}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={styles.description}>
                        <span>História</span>
                        <p>{props.publication.description}</p>
                    </div>

                </div>
            </>
        )
    }

    function renderPublicationImages() {
        let carouselItems = []
        props.publication.imagesURL.map(({imageURL}, index) => {
            carouselItems.push(
                <MDBCarouselItem itemId={index}>
                    <MDBCarouselElement src={`${baseApiUrl}/publication-pictures/${imageURL}`} alt='...' />
                </MDBCarouselItem>
            )
        })

        return carouselItems
    }

    return (
        <div>
            {
                props.publication.publicationType == 'event'
                    ? renderEventDetails()
                    : renderHistoryDetails()
            }
        </div>
    )
}

export default EventDetailsContent