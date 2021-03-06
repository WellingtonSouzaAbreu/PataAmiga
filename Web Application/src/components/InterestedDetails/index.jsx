import React from "react";
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import { MDBInput } from "mdbreact";

import styles from './styles.module.css'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import AnimalDetails from './../../components/AnimalDetails'

import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBCarouselElement,
} from 'mdb-react-ui-kit';

export default function InterestedModalDetails(props) {
	const [open, setVisibility] = React.useState(false);

	console.log(props)

	function ImagesCarousel() {
		return (
			<MDBCarousel showControls fade className={styles.carousel}>
				<MDBCarouselInner>
					{renderCarouselImages()}
				</MDBCarouselInner>
			</MDBCarousel>
		);
	}

	function renderCarouselImages() {
		return props.interestedInAdopt.imagesURL.map((imageURL, index) => {
			return (
				<MDBCarouselItem itemId={index}>
					<MDBCarouselElement src={`${baseApiUrl}/interested-pictures/${imageURL}`} alt='...' />
				</MDBCarouselItem>
			)
		})
	}

	const handleOpen = () => {
		setVisibility(true);
	};

	const handleClose = () => {
		setVisibility(false);

	};


	return (
		<div>
			<div onClick={handleOpen}>
				<i class='fas fa-edit'></i>
			</div>

			<Modal
				className={styles.modal}
				open={open}
				onClose={handleClose} 
				closeAfterTransition
			>
				<Fade in={open}>
					<div className={styles.paper}>
						<div className={styles.content}>
							<div className={styles.peopleAnimal}>
								<div>
									<div>
										<span>{props.interestedInAdopt.userName}</span>
									</div>
									<span>{props.interestedInAdopt.cellNumber}</span>
								</div>
								<div>
									<div>
										<span>{props.interestedInAdopt.animalName}</span>
									</div>
									<div>
										<AnimalDetails idAnimal={props.interestedInAdopt.animalId} />
									</div>
								</div>
							</div>
							<div className={styles.containerImages}>
								<span>Imagens do quintal</span>
								<ImagesCarousel />
							</div>
							<div>
								<MDBInput value={props.interestedInAdopt.description} type="textarea" label="Descri????o" disabled className={styles.description} outline />
							</div>
							<div>
								<button className={styles.buttonVerify}
								 onClick={() => props.onToggleStateOfInterest(!props.interestedInAdopt.verified, props.interestedInAdopt.id)}
								 >{props.interestedInAdopt.verified ? 'N??o Verificar' : 'Verificar'}</button>
							</div>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	)
}