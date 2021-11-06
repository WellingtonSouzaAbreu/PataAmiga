import React, { Component } from "react";
import axios from 'axios'
import { MDBInput } from "mdbreact";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { DropzoneArea } from 'material-ui-dropzone'
import classNames from "classnames";

import styles from './styles.module.css'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import CustomDateTimePicker from './../CustomDateTimePicker/index.jsx'
import CustomSnackbar from './../CustomSnackbar'

const initialState = {
	title: '',
	description: '',
	reference: '',
	address: '',
	city: '',
	publicationType: 'event',
	district: '',
	startDateTime: new Date(),
	endDateTime: new Date(),

	animalName: '',
	history: '',
	reasonRescue: '',

	pictures: [],

	snackbarVisible: false,
	snackbarMessage: '',
	snackbarType: 'info',

	editMode: false
}

class AddEvent extends Component {

	state = { ...initialState }

	componentDidMount = async () => {
		if (this.props.edit && !this.state.editMode) {
			this.setState({ id: this.props.idPublicaton, ...await this.getDetailsOfPublication() })
		}
	}

	getDetailsOfPublication = async () => {
		return await axios.get(`${baseApiUrl}/publication/${this.props.idPublication}`)
			.then(async (res) => {
				return res.data
			})
			.catch(err => {
				console.log(err)
				this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Erro ao obter detalhes da publicação!`, 'error')
			})
	}

	changeStartDateTime = (startDateTime) => {
		this.setState({ startDateTime })
	}

	changeEndDateTime = (endDateTime) => {
		this.setState({ endDateTime })
	}

	savePublication = async () => {
		console.log('PicturesState')
		console.log(this.state)

		if (!this.state.pictures.length) {
			this.toggleSnackbarVisibility(true, `Adicione pelo menos uma foto para concluir o cadastro!`, 'warning')
			return
		}

		const publication = await this.getPublicationDataForType()

		if (this.props.edit) publication.id = this.props.idPublication //Edição

		await axios.post(`${baseApiUrl}/publication`, { publication })
			.then(async res => {
				await this.savePublicationPictures(res.data)
			})
			.catch(err => {
				console.log(err)
				this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Erro ao cadastrar publicação!`, err.response.status == 400 ? 'warning' : 'error')
			})
	}

	getPublicationDataForType = () => {
		if (this.state.publicationType === 'event') {
			return {
				title: this.state.title,
				description: this.state.description,
				city: this.state.city,
				district: this.state.district,
				address: this.state.address,
				reference: this.state.reference,
				publicationType: this.state.publicationType,
				startDateTime: this.state.startDateTime,
				endDateTime: this.state.endDateTime
			}
		} else {
			return {
				title: this.state.title,
				animalName: this.state.animalName,
				history: this.state.history,
				reasonRescue: this.state.reasonRescue,
				publicationType: this.state.publicationType,
				startDateTime: this.state.startDateTime,
				endDateTime: this.state.endDateTime
			}
		}
	}

	savePublicationPictures = async (publicationId) => {

		let valid = [true]

		await this.state.pictures.forEach(async picture => {
			console.log(picture)
			let formData = new FormData();
			formData.append('publicationPicture', picture)
			formData.append('publicationId', publicationId)

			await axios.post(`${baseApiUrl}/publication/picture`, formData)
				.then(res => {
					valid.push(true)
				})
				.catch(err => {
					console.log(err)
					valid.push(false)
				})
		})

		if (valid.reduce((total, current) => total && current, true)) {
			this.toggleSnackbarVisibility(true, `Publicação cadastrada com sucesso!`, 'success')
			this.props.onRefresh(true)
		} else {
			this.toggleSnackbarVisibility(true, `Erro ao cadastrar publicação!`, 'error')
		}
	}

	updateSelectedPictures = (files) => {
		console.log('To no updateSelectedPicture')
		console.log(files)
		if (!files) {
			return
		}
		this.setState({ pictures: [...files] })
	}

	loadImagesURL = () => {
		console.log(this.state)
		if (this.state.imagesURL) {
			return this.state.imagesURL.map(({ imageURL }) => {
				console.log('map')
				console.log(`${baseApiUrl}/publication-pictures/${imageURL}`)
				return `${baseApiUrl}/publication-pictures/${imageURL}`
			})
		}
	}

	toggleSnackbarVisibility = (visibility, message, type) => {
		if (visibility) {
			this.setState({ snackbarVisible: visibility, snackbarMessage: message, snackbarType: type })
		} else {
			this.setState({ snackbarVisible: !!visibility })
		}
	}

	render() {
		console.log(this.loadImagesURL())
		return (
			<div className={styles.container} >
				<CustomSnackbar visible={this.state.snackbarVisible} message={this.state.snackbarMessage} type={this.state.snackbarType} onClose={this.toggleSnackbarVisibility} />
				<Accordion
					defaultExpanded={this.props.edit ? true : false}
				>
					<AccordionSummary
						expandIcon={<i className='bx bx-down-arrow-alt'></i>}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography className={styles.heading}>
							<i className={this.props.edit ? 'bx bxs-edit' : 'bx bxs-layer-plus'}></i>
							<span className={styles.spanAdjust}>{this.props.edit ? 'Editar publicação' : 'Cadastrar publicação'}</span>
						</Typography>
					</AccordionSummary>
					<AccordionDetails className={classNames(styles.containerForm, this.props.edit && styles.containerFormEdit)}>
						<div className={classNames(styles.formCreate, this.props.edit && styles.formCreateEdit)}>
							<div className={styles.nameDescription}>
								<FormControl className={styles.fullWidthAdjsut} >
									<InputLabel id="demo-simple-select-helper-label">Tipo de publicação</InputLabel>
									<Select
										labelId="demo-simple-select-helper-label"
										id="demo-simple-select-helper"
										value={this.state.publicationType}
										onChange={(e) => this.setState({ ...initialState, publicationType: e.target.value })}
									>
										<MenuItem value=""></MenuItem>
										<MenuItem value={'event'}>Evento</MenuItem>
										<MenuItem value={'done'}>História de adoção</MenuItem>
									</Select>
									<FormHelperText>Selecione uma opção</FormHelperText>
								</FormControl>

								{
									this.state.publicationType === 'event'
										? <CustomDateTimePicker
											label={'Data e hora de início'}
											value={this.state.startDateTime} onChangeDateTime={this.changeStartDateTime}
										/>
										: null
								}
								<CustomDateTimePicker
									label={this.state.publicationType === 'event' ? 'Data e hora de encerramento' : 'Publicação visível até'}
									value={this.state.endDateTime} onChangeDateTime={this.changeEndDateTime}
								/>

								<MDBInput label={this.state.publicationType === 'event' ? 'Nome do evento' : 'Nome da história'} outline
									value={this.state.title} onChange={e => this.setState({ title: e.target.value })}
								/>
								{
									this.state.publicationType === 'event'
										? <>

											<MDBInput type="textarea" label="Descrição" className={styles.descriptionInput} outline
												value={this.state.description} onChange={e => this.setState({ description: e.target.value })}
											/>
										</>
										: <MDBInput type="textarea" label="História do animal" className={styles.descriptionInput} outline
											value={this.state.history} onChange={e => this.setState({ history: e.target.value })}
										/>
								}
							</div>
							<div className={styles.locationEvent}>
								{
									this.state.publicationType === 'event'
										? <>
											<MDBInput label="Cidade" outline
												value={this.state.city} onChange={e => this.setState({ city: e.target.value })}
											/>
											<MDBInput label="Bairro" outline
												value={this.state.district} onChange={e => this.setState({ district: e.target.value })}
											/>
											<MDBInput label="Endereço" outline
												value={this.state.address} onChange={e => this.setState({ address: e.target.value })}
											/>
											<MDBInput label="Referência" outline
												value={this.state.reference} onChange={e => this.setState({ reference: e.target.value })}
											/>
										</>
										: <>
											<MDBInput label="Nome do animal" outline
												value={this.state.animalName} onChange={e => this.setState({ animalName: e.target.value })}
											/>
											<MDBInput label="Razão do resgate" outline
												value={this.state.reasonRescue} onChange={e => this.setState({ reasonRescue: e.target.value })}
											/>
										</>
								}
								<DropzoneArea
									// clearOnUnmount={true}
									dropzoneClass={styles.boxUpload}
									initialFiles={!this.state.pictures.length ? this.loadImagesURL() : []} // TODO Initial Files não funciona
									filesLimit={3}
									acceptedFiles={['image/*']}
									dropzoneText={`Carregar imagens(max: 3)`}
									onChange={(files) => this.updateSelectedPictures(files)}
								/>
							</div>
						</div>
						<div className={classNames(styles.confirmButton, this.props.edit && styles.confirmButtonEdit)}>
							<button className={styles.buttonCreateEvent} onClick={this.savePublication}>
								{this.props.edit ? 'Salvar alterações' : 'Cadastrar'}
							</button>
						</div>
					</AccordionDetails>
				</Accordion>
			</div>
		)
	}
}

export default AddEvent