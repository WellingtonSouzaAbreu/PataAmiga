import React, { Component } from 'react';
import styles from './styles.module.css'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

import { baseApiUrl } from '../../services/baseApiUrl';
import CustomSnackbar from './../CustomSnackbar'
import StepAnimalInfo from '../StepAnimalInfo/index.jsx'
import StepAnimalRescue from '../StepAnimalRescue/index.jsx'
import StepAnimalVeterinary from '../StepAnimalVeterinary/index.jsx'

const initialState = {
	activeStep: 0,

	animal: {
		castrated: false,
		sex: false,
		dateOfBirth: new Date(),
		availableForAdoption: false
	},
	pictures: {},
	veterinaryCare: {
		needOfMedication: false,
		needOfHospitalization: false,
		dateOfVeterinaryCare: new Date()
	},
	rescue: {
		dateOfRescue: new Date(),
		forwardedToKennel: true,
		policeSupport: false
	},

	snackbarVisible: false,
	snackbarMessage: '',
	snackbarType: 'info'
}

class AddAnimal extends Component {

	state = { ...initialState }

	componentDidMount = () => {
		if (this.props.edit) {
			this.loadAnimal()
		}
	}

	loadAnimal = async () => {
		await axios.get(`${baseApiUrl}/animal/${this.props.idAnimal}/all-data`)
			.then(async res => {
				console.log(res.data)

				let newState = await this.structureStateData(res.data)

				this.setState({ ...newState }) //Depois de salvo, os dados veterinarios são editados por detalhes
			})
			.catch(err => {
				console.log(err)
				this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Erro obter animais!`, 'error')
			})
	}

	structureStateData = async (allData) => {
		let currentState = { ...this.state }

		currentState.rescue = allData.rescue ? allData.rescue : currentState.rescue

		delete allData.veterinaryCare
		delete allData.rescue

		currentState.animal = allData
		return currentState
	}

	nextStep = () => {
		this.setActiveStep(this.state.activeStep + 1);
	};

	backStep = () => {
		this.setActiveStep(this.state.activeStep - 1);
	};

	resetSteps = () => {
		this.setActiveStep(0);
	};

	setActiveStep = (currentActiveStep) => {
		this.setState({ activeStep: currentActiveStep })
	}

	getStepContent(step) {
		switch (step) {
			case 0:
				return <StepAnimalInfo animal={this.state.animal} selectedPictures={this.state.pictures} edit={this.props.edit} onChange={this.updateAnimalField} onSelectPicture={this.updateSelectedPictures} onChangeDate={this.changeAnimalBirthDate} />
			case 1:
				return <StepAnimalVeterinary veterinaryCare={this.state.veterinaryCare} onChange={this.updateVeterinaryCareField} onChangeDate={this.changeDateVeterinaryCare} />
			case 2:
				return <StepAnimalRescue rescue={this.state.rescue} onChange={this.updateAnimalRescueField} onChangeDate={this.changeDateRescue} />;
			default:
				return 'Unknown step';
		}
	}

	updateAnimalField = (fieldValue) => {
		let animal = { ...this.state.animal, ...fieldValue }
		this.setState({ animal }, console.log(this.state.animal))
	}

	changeAnimalBirthDate = (date) => {
		this.setState({ dateOfBirth: date })
	}

	updateSelectedPictures = (pictures) => {
		this.setState({ pictures: pictures })
	}

	updateVeterinaryCareField = (fieldValue) => {
		let veterinaryCare = { ...this.state.veterinaryCare, ...fieldValue }
		this.setState({ veterinaryCare }, console.log(this.state.veterinaryCare))
	}

	changeDateVeterinaryCare = (date) => {
		this.setState({ dateOfVeterinaryCare: date })
	}

	updateAnimalRescueField = (fieldValue) => {
		let rescue = { ...this.state.rescue, ...fieldValue }
		this.setState({ rescue })
	}

	changeDateRescue = (date) => {
		this.setState({ dateOfRescue: date })
	}

	saveAnimal = async () => {
		if (!this.state.pictures.length) {
			this.toggleSnackbarVisibility(true, `Adicione pelo menos uma foto para concluir o cadastro!`, 'warning')
			return
		}

		console.log(this.state)
		const allDataOfAnimal = {
			animal: this.state.animal,
			pictures: this.state.pictures,
			veterinaryCare: this.state.veterinaryCare,
			rescue: this.state.rescue
		}

		delete allDataOfAnimal.pictures
		delete allDataOfAnimal.activeStep

		await axios.post(`${baseApiUrl}/animal`, { ...allDataOfAnimal })
			.then(async res => {
				await this.saveAnimalPictures(res.data)
			})
			.catch(err => {
				console.log(err)
				this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Erro ao cadastrar animal!`, err.response.status == 400 ? 'warning' : 'error')
			})
	}

	saveAnimalPictures = async (animalId) => {
		console.log(this.state.pictures)
		let valid = [true]

		await this.state.pictures.forEach(async picture => {
			console.log(picture)
			let formData = new FormData();
			formData.append('animalPicture', picture)
			formData.append('animalId', animalId)

			await axios.post(`${baseApiUrl}/animal/picture`, formData)
				.then(res => {
					valid.push(true)
				})
				.catch(err => {
					console.log(err)
					valid.push(false)
				})
		})

		if (valid.reduce((total, current) => total && current, true)) {
			this.toggleSnackbarVisibility(true, `Animal cadastrado com sucesso!`, 'success')
			this.props.onRefresh()
		} else {
			this.toggleSnackbarVisibility(true, `Erro ao cadastrar animal!`, 'error')
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
		let steps = ['Informações do animal']

		if(!this.props.edit ){
			steps.push('Dados veterinários', 'Resgate')
		}

		return (
			<div className={styles.root}>
				<CustomSnackbar visible={this.state.snackbarVisible} message={this.state.snackbarMessage} type={this.state.snackbarType} onClose={this.toggleSnackbarVisibility} />
				<Stepper activeStep={this.state.activeStep} orientation="vertical">
					{steps.map((label, index) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
							<StepContent>
								<Typography>{this.getStepContent(index)}</Typography>
								<div className={styles.actionsContainer}>
									<div>
										<Button
											disabled={this.state.activeStep === 0}
											onClick={this.backStep}
											className={styles.button}
										>
											Anterior
										</Button>
										<Button
											variant="contained"
											color="primary"
											onClick={this.state.activeStep === steps.length - 1 ? this.saveAnimal : this.nextStep}
											className={styles.button}
										>
											{this.state.activeStep === steps.length - 1 ? 'Finalizar' : 'Proximo'}
										</Button>
									</div>
								</div>
							</StepContent>
						</Step>
					))}
				</Stepper>
				{this.state.activeStep === steps.length && (
					<Paper square elevation={0} className={styles.resetContainer}>
						<Typography>Todas as informações foram inseridas. O animal foi registrado no sistema.</Typography>
						<Button onClick={this.resetSteps} className={styles.button}>
							Recomeçar
						</Button>
					</Paper>
				)}
			</div>
		);
	}
}

export default AddAnimal