import React from 'react'
import styles from './styles.module.css'
import { MDBInput } from "mdbreact";

import AdoptionFollowUpModal from '../AdoptionFollowUpModal';

import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBCarouselElement,
} from 'mdb-react-ui-kit';


const FollowUpModal = () => {
	return (
		<div className={styles.remonteMonitoringContainerButtons}>
			<AdoptionFollowUpModal />
		</div>
	)
}

const CardGuardianInfo = () => {
	return (
		<div class="card">
			<div className={styles.cardContent}>
				<strong className={styles.title}>Guardião </strong>
				<div className={styles.infoNameGuardian}>
					<strong>Nome</strong>
					<span>José Silva Olinveira</span>
				</div>
				<div className={styles.contactGuardian}>
					<span>Contatos</span>
					<div className={styles.groupGuardianInfo}>
						<div>
							<strong className={styles.titleInfo}>Telefone</strong>
							<strong>4002-8922</strong>
						</div>
						<div>
							<strong className={styles.titleInfo} >Cel</strong>
							<strong>984841812</strong>
						</div>
						<div>
							<strong className={styles.titleInfo} >Email</strong>
							<strong>jose.silva.oliveira19@gmail.com</strong>
						</div>
					</div>
					<div className={styles.andressGuardian}>
						<span>Endereço</span>
						<div className={styles.avNumber}>
							<div>
								<strong className={styles.titleInfo}>Rua: </strong>
								<strong>Geraldo Dias Fiusa</strong>
							</div>
							<div>
								<strong className={styles.titleInfo} >N: </strong>
								<strong>4484</strong>
							</div>
							<div>
								<strong className={styles.titleInfo} >Bairro: </strong>
								<strong>Cidade Alta</strong>
							</div>
						</div>
						<div>
							<strong className={styles.titleInfo} >Cidade: </strong>
							<strong>Rolim de Moura</strong>
						</div>
					</div>
				</div>
				<FollowUpModal />
			</div>
		</div>
	)
}

export default function AdoptionsAnimalsDetails() {
	function ImagesCarousel() {
		return (
			<MDBCarousel showIndicators showControls fade className={styles.carouselImages}>
				<MDBCarouselInner>
					<MDBCarouselItem itemId={0}>
						<MDBCarouselElement src='https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg' alt='...' />
					</MDBCarouselItem>
					<MDBCarouselItem itemId={1}>
						<MDBCarouselElement src='https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=70&strip=info&w=680&h=453&crop=1' alt='...' />
					</MDBCarouselItem>
					<MDBCarouselItem itemId={2}>
						<MDBCarouselElement src='https://images.trustinnews.pt/uploads/sites/5/2019/10/tribunais-vao-tratar-animais-de-estimacao-cada-vez-mais-como-criancas-2-1024x687.jpeg' alt='...' />
					</MDBCarouselItem>
				</MDBCarouselInner>
			</MDBCarousel>
		);
	}

	return (
		<div className={styles.container}>
			<div className={styles.imgsDescription}>
				<div className={styles.containerCarousel} >
					<ImagesCarousel />
				</div>
				<MDBInput type="textarea" label="Descrição" value={"ERA UMA VEZ "} disabled className={styles.description} />
			</div>
			<div className={styles.otherDescriptions}>
				<div className={styles.group}>
					<div className={styles.divider1}>
						<div className={styles.groupString}>
							<strong>Nome</strong>
							<span>Floquinho de neve</span>
						</div>
						<div className={styles.groupString}>
							<strong>Especie</strong>
							<span>Canino</span>
						</div>
						<div className={styles.groupString}>
							<strong>Cor</strong>
							<span>Branco</span>
						</div>
						<div className={styles.groupString}>
							<strong>Sexo</strong>
							<span>Macho</span>
						</div>

					</div>
					<div className={styles.divider2}>
						<div className={styles.groupString}>
							<strong>Apelido</strong>
							<span>Floquinho</span>
						</div>
						<div className={styles.groupString}>
							<strong>Raça</strong>
							<span>Indefinido</span>
						</div>
						<div className={styles.groupString}>
							<strong>Idade aproximada</strong>
							<span>16 Meses</span>
						</div>
						<div className={styles.groupString}>
							<strong>Castrado</strong>
							<span>Sim</span>
						</div>
					</div>
				</div>


			</div>
			<div className={styles.divider3}>
				<CardGuardianInfo />
			</div>
		</div>
	)
}