import React from 'react'
import styles from './styles.module.css'
import { MDBInput } from "mdbreact";

import {baseApiUrl} from './../../services/baseApiUrl.js'
import AdoptionFollowUpModal from '../AdoptionFollowUpModal';

import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBCarouselElement,
} from 'mdb-react-ui-kit';

export default function AdoptionsAnimalsDetails(props) {

	console.log('props')
	console.log(props.adoption)

	const FollowUpModal = () => {
		return (
			<div className={styles.remonteMonitoringContainerButtons}>
				<AdoptionFollowUpModal idAdoption={props.adoption.id} />
			</div>
		)
	}

	function ImagesCarousel() {
		return (
			<MDBCarousel  fade className={styles.carouselImages}>
				<MDBCarouselInner>
					{props.adoption.animalImageURL && renderAnimalAdoptedImages()}
				</MDBCarouselInner>
			</MDBCarousel>
		);
	}

	function renderAnimalAdoptedImages() {
		return (
			<MDBCarouselItem itemId={0}>
				<MDBCarouselElement src={`${baseApiUrl}/animal-pictures/${props.adoption.animalImageURL}`} alt='...' />
			</MDBCarouselItem>
		)
	}

	function animalInfo() {
		return (
			<div className={styles.otherDescriptions}>
				<div className={styles.group}>
					<div className={styles.divider1}>
						<div className={styles.groupString}>
							<strong>Nome</strong>
							<span>{props.adoption.animalName}</span>
						</div>
						<div className={styles.groupString}>
							<strong>Especie</strong>
							<span>{props.adoption.specie}</span>
						</div>
						<div className={styles.groupString}>
							<strong>Cor</strong>
							<span>{props.adoption.color}</span>
						</div>
						<div className={styles.groupString}>
							<strong>Sexo</strong>
							<span>{props.adoption.sex == 'M' ? 'Macho' : 'Fêmea'}</span>
						</div>

					</div>
					<div className={styles.divider2}>
						<div className={styles.groupString}>
							<strong>Apelido</strong>
							<span>{props.adoption.surname}</span>
						</div>
						<div className={styles.groupString}>
							<strong>Raça</strong>
							<span>{props.adoption.breed}</span>
						</div>
						<div className={styles.groupString}>
							<strong>Idade aproximada</strong>
							<span>{props.adoption.aproximateAge}</span>
						</div>
						<div className={styles.groupString}>
							<strong>Castrado</strong>
							<span>{props.adoption.castrated ? 'Sim' : 'Não'}</span>
						</div>
					</div>
				</div>
			</div>
		)
	}

	function guardianInfo() {
		return (
			<div class="card">
				<div className={styles.cardContent}>
					<strong className={styles.title}>Guardião </strong>
					<div className={styles.infoNameGuardian}>
						<strong>Nome</strong>
						<span>{props.adoption.adopterName}</span>
					</div>
					<div className={styles.contactGuardian}>
						<span>Contatos</span>
						<div className={styles.groupGuardianInfo}>
							<div>
								<strong className={styles.titleInfo}>Telefone</strong>
								<strong>{props.adoption.phone}</strong>
							</div>
							<div>
								<strong className={styles.titleInfo} >Celular</strong>
								<strong>{props.adoption.cellNumber}</strong>
							</div>
							<div>
								<strong className={styles.titleInfo} >Email</strong>
								<strong>{props.adoption.email}</strong>
							</div>
						</div>
						<div className={styles.andressGuardian}>
							<span>Endereço</span>
							<div className={styles.avNumber}>
								<div>
									<strong className={styles.titleInfo}>Rua: </strong>
									<strong>{props.adoption.address}</strong>
								</div>
								<div>
									<strong className={styles.titleInfo} >N: </strong>
									<strong>{props.adoption.houseNumber}</strong>
								</div>
								<div>
									<strong className={styles.titleInfo} >Bairro: </strong>
									<strong>{props.adoption.district}</strong>
								</div>
							</div>
							<div>
								<strong className={styles.titleInfo} >Cidade: </strong>
								<strong>{props.adoption.city}</strong>
							</div>
						</div>
					</div>
					<FollowUpModal />
				</div>
			</div>
		)
	}


	return (
		<div className={styles.container}>
			<div className={styles.imgsDescription}>
				<div className={styles.containerCarousel} >
					<ImagesCarousel />
				</div>
				<MDBInput type="textarea" label="Descrição" value={props.adoption.othersCharacteristics} disabled className={styles.description} />
			</div>
			{animalInfo()}
			<div className={styles.divider3}>
				{guardianInfo()}
			</div>
		</div>
	)
}