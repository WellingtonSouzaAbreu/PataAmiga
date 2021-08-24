import React from "react";
import styles from './styles.module.css'


export default function ContentDetailsEvent(){
    return(
        <div>
            <div className={styles.headerModal}>
                <span>Feira de Adoção</span>
            </div>
            <div className={styles.content}>
                <div>
                    <span>Descrição</span>
                    <p>In simple language, product cad means the card of product that is used to promote the specific product on the webpage. This is also called an e-commerce product card. There are various types of products we can found on the internet with different designs.</p>
                    <p>In simple language, product cad means the card of product that is used to promote the specific product on the webpage. This is also called an e-commerce product card. There are various types of products we can found on the internet with different designs.</p>
                    <div className={styles.detailed}>
                        <div className={styles.detailedGroup}>
                            <div className={styles.itemDetail}>
                                <i className='bx bx-calendar-star bx-sm'></i>
                                <strong>Começa</strong>
                                <span>15/09/2021</span>
                            </div>
                            <div className={styles.itemDetail}>
                                <i className='bx bxs-calendar-exclamation bx-sm' ></i>
                                <strong>Termina</strong>
                                <span>17/09/2021</span>
                            </div> 
                        </div>
                        <div className={styles.detailedGroupRow}>
                            <div className={styles.ItemDetailRow}>
                                <strong>Local</strong>
                                <div className={styles.rowDetail}>
                                    <i className='bx bx-current-location' ></i>
                                    <span>Rua T Nº 5710</span>
                                </div>
                            </div>
                            <div className={styles.ItemDetailRow}>
                                <strong>Bairro</strong>
                                <div className={styles.rowDetail}>
                                    <i className='bx bxs-directions'></i>
                                    <span>Cidade Alta</span>
                                </div>
                            </div>
                            <div className={styles.ItemDetailRow}>
                                <strong>Cidade</strong>
                                <div className={styles.rowDetail}>
                                    <i className='bx bxs-city' ></i>
                                    <span>Rolim de Moura</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.statsEvent}>
                        <strong>Status: </strong>
                        <strong className={styles.status}>Encerrado</strong>
                    </div>
                </div>
                <div>
                </div>

            </div>
        </div>
       
       
    )
}