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

import styles from './styles.module.css'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import CustomDateTimePicker from './../CustomDateTimePicker/index.jsx'

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

	pictures: []
}

class AddEvent extends Component {

	state = { ...initialState }

	changeStartDateTime = (startDateTime) => {
		this.setState({ startDateTime })
	}

	changeEndDateTime = (endDateTime) => {
		this.setState({ endDateTime })
	}

	savePublication = async () => {

		if (this.state.pictures.length < 1) {
			window.alert('Selecione pelo menos uma imagem para realizar a publicação!')
			return
		}

		const publication = await this.getPublicationDataForType()

		await axios.post(`${baseApiUrl}/publication`, { publication })
			.then(async res => {
				window.alert('Salvo com sucesso!')
				await this.savePublicationPictures(res.data)
			})
			.catch(err => {
				console.log(err)
				window.alert(err.response.data)
			})
	}

	getPublicationDataForType = () => {
		if (this.state.publicationType == 'event') {
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

		console.log(this.state.pictures)

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

		if (valid.reduce((total, current) => total && current), true) {
			window.alert('Imagens salvas com sucesso!')
			this.props.onRefresh()
		} else {
			window.alert('Ocorreu um erro ao salvar as imagens!')
		}
	}

	updateSelectedPictures = (files) => {
		this.setState({ pictures: files })
	}

	render() {
		return (
			<div className={styles.container} >
				<Accordion >
					<AccordionSummary
						expandIcon={<i className='bx bx-down-arrow-alt'></i>}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography className={styles.heading}>
							<i className='bx bxs-calendar-plus'></i>
							<span className={styles.spanAdjust}>Criar uma nova publicação</span>
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<div className={styles.formCreate}>
							<div className={styles.nameDescription}>
								<FormControl className={styles.fullWidthAdjsut} >
									<InputLabel id="demo-simple-select-helper-label">Tipo de publicação</InputLabel>
									<Select
										labelId="demo-simple-select-helper-label"
										id="demo-simple-select-helper"
										value={this.state.publicationType}
										onChange={(e) => this.setState({ publicationType: e.target.value })}
									>
										<MenuItem value=""></MenuItem>
										<MenuItem value={'event'}>Evento</MenuItem>
										<MenuItem value={'done'}>História de adoção</MenuItem>
									</Select>
									<FormHelperText>Selecione uma opção</FormHelperText>
								</FormControl>

								<CustomDateTimePicker
									label={'Data e hora de início'}
									value={this.state.startDateTime} onChangeDateTime={this.changeStartDateTime}
								/>
								<CustomDateTimePicker
									label={'Data e hora de encerramento'}
									value={this.state.endDateTime} onChangeDateTime={this.changeEndDateTime}
								/>

								<MDBInput label={this.state.publicationType == 'event' ? 'Nome do evento' : 'Nome da história'} outline
									value={this.state.title} onChange={e => this.setState({ title: e.target.value })}
								/>
								{
									this.state.publicationType == 'event'
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
									this.state.publicationType == 'event'
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
									acceptedFiles={['image/*']}
									dropzoneText={`Carregar imagens(max: 3)`}
									onChange={(files) => this.updateSelectedPictures(files)}
								/>
							</div>
						</div>
						<div className={styles.confirmButton}>
							<button className={styles.buttonCreateEvent} onClick={this.savePublication}>
								Criar Evento
							</button>
						</div>
					</AccordionDetails>
				</Accordion>
			</div>
		)
	}
}

export default AddEvent