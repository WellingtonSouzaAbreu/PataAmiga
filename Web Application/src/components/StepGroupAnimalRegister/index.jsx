import React, { Component } from 'react';
import styles from './styles.module.css'

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

import { baseApiUrl } from '../../services/baseApiUrl';
import StepAnimalInfo from './../StepAnimalInfo/index.jsx'
import StepAnimalRescue from './../StepAnimalRescue/index.jsx'
import StepAnimalVeterinary from './../StepAnimalVeterinary/index.jsx'

const initialState = {
	activeStep: 0,

	animal: {
		castrated: false,
		sex: false,
		dateOfBirth: new Date()
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
	}
}

class StepGroupAnimalRegister extends Component {

	state = { ...initialState }

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
				return <StepAnimalInfo animal={this.state.animal} onChange={this.updateAnimalField} onSelectPicture={this.updateSelectedPictures} onChangeDate={this.changeAnimalBirthDate} />
			case 1:
				return <StepAnimalVeterinary veterinaryCare={this.state.veterinaryCare} onChange={this.updateVeterinaryCareField} onChangeDate={this.changeDateVeterinaryCare} />;
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
		this.setState({ rescue }, console.log(this.state.rescue))
	}

	changeDateRescue = (date) => {
		this.setState({ dateOfRescue: date })
	}

	saveAnimal = async () => {
		if (!this.state.pictures.length) {
			window.alert('Selecione pelo menos uma imagem para realizar o cadastro do animal!')
			return
		}

		window.alert(this.state.pictures.length)

		console.log(this.state)
		const allDataOfAnimal = { ...this.state }
		delete allDataOfAnimal.pictures
		delete allDataOfAnimal.activeStep

		await axios.post(`${baseApiUrl}/animal`, { ...allDataOfAnimal })
			.then(async res => {
				window.alert('Animal cadastrado com sucesso! id => ' + res.data)
				await this.saveAnimalPictures(res.data)
			})
			.catch(err => {
				console.log(err)
				window.alert(err.response && err.response.data)
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

		if (valid.reduce((total, current) => total && current), true) {
			window.alert('Imagens salvas com sucesso!')
			this.props.onRefresh()
		} else {
			window.alert('Ocorreu um erro ao salvar as imagens!')
		}
	}

	render() {
		const steps = ['Informações do animal', 'Dados veterinários', 'Resgate']

		return (
			<div className={styles.root}>
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

export default StepGroupAnimalRegister