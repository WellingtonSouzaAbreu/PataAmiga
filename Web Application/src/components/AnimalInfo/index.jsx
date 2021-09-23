import React from 'react'
import styles from './styles.module.css'
import { MDBInput } from "mdbreact";

import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBCarouselElement,
} from 'mdb-react-ui-kit';
import { baseApiUrl } from '../../services/baseApiUrl';


export default function DetailsAnimal(props) {

	const renderAnimalImages = () => {
		console.log(props.animal.imagesURL)
		const carouselItem = props.animal.imagesURL.map(image => {
			console.log(`${baseApiUrl}/animal-pictures/${image.imageURL}`)
			return (
				<MDBCarouselItem itemId={image.id}>
					<MDBCarouselElement src={`${baseApiUrl}/animal-pictures/${image.imageURL}`} alt='...' />
				</MDBCarouselItem>
			)
		})

		console.log(carouselItem)
		return carouselItem
	}

	return (
		<div className={styles.container}>
			<div className={styles.imgsDescription}>
				<div className={styles.containerCarousel} >
					<MDBCarousel showIndicators showControls fade className={styles.carouselImages}>
						<MDBCarouselInner>
							{props.animal.imagesURL && renderAnimalImages()}
						</MDBCarouselInner>
					</MDBCarousel>
				</div>
				<MDBInput type="textarea" label="Outras características" value={props.animal.othersCharacteristics} disabled className={styles.description} />
			</div>
			<div className={styles.otherDescriptions}>
				<div className={styles.group}>
					<div>
						<div className={styles.groupString}>
							<strong>Nome</strong>
							<span>{props.animal.name}</span>
						</div>
						<div className={styles.groupString}>
							<strong>Especie</strong>
							<span>{props.animal.specie}</span>
						</div>
						<div className={styles.groupString}>
							<strong>Cor</strong>
							<span>{props.animal.color}</span>
						</div>
						<div className={styles.groupString}>
							<strong>Sexo</strong>
							<span>{props.animal.sex}</span>
						</div>
					</div>
					<div>
						<div className={styles.groupString}>
							<strong>Apelido</strong>
							<span>{props.animal.surname}</span>
						</div>
						<div className={styles.groupString}>
							<strong>Raça</strong>
							<span>{props.animal.breed}</span>
						</div>
						<div className={styles.groupString}>
							<strong>Idade aproximada</strong>
							<span>{props.animal.aproximateAge}</span>
						</div>
						<div className={styles.groupString}>
							<strong>Castrado</strong>
							<span>{props.animal.castrated ? 'Sim' : 'Não'}</span>
						</div>
					</div>

				</div>
				<div className={styles.groupIndicators}>
					<div className={styles.stringIndicators}>
						<strong>Adotado?</strong>
						<button disabled>{props.animal.extraInfo.adopted  ? 'Sim': 'Não'}</button>
					</div>
					<div className={styles.stringIndicators}>
						<strong>Lar temporário?</strong>
						<button>{props.animal.extraInfo.temporaryHome ? 'Sim': 'Não'}</button>
					</div>
					<div className={styles.stringIndicators}>
						<strong>Disponível para adoção?</strong>
						<button disabled>{props.animal.extraInfo.availableToAdoption  ? 'Sim': 'Não'}</button>
					</div>
				</div>
			</div>

		</div>
	)
}