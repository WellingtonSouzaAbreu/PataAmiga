import React, { Component } from "react";
import axios from 'axios'
import { MDBInput } from "mdbreact";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { MenuItem } from "@material-ui/core";

import styles from './styles.module.css'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import DatePicker from './../../components/CustomDatePicker/index.jsx'
import DonationsTable from "../../components/DonationsTable/index.jsx";

const initialState = {
	donationDetailsVisibility: false,
	donationDetails: {},

	donations: [],

	name: '',
	cellNumber: '',
	description: '',
	donationType: '',
	date: new Date(),
	donationReceived: false
}

class Donations extends Component {

	state = { ...initialState }

	componentDidMount = async () => {
		await this.loadDonations()
	}

	loadDonations = async () => {
		await axios.get(`${baseApiUrl}/donation`)
			.then(res => {
				this.setState({ donations: res.data })
			})
			.catch(err => {
				console.log(err)
				window.alert('Ocorreu um erro ao obter doações')
			})
	}

	saveDonation = async () => {
		const donation = {
			name: this.state.name,
			cellNumber: this.state.cellNumber,
			description: this.state.description,
			donationType: this.state.donationType,
			date: this.state.date,
			donationReceived: this.state.donationReceived
		}

		await axios.post(`${baseApiUrl}/donation`, donation)
			.then(_ => {
				window.alert('Doação registrada com sucesso!')
				this.loadDonations()
			})
			.catch(err => {
				console.log(err)
				window.alert(err.response.data)
			})
	}


	changeDate = (date) => {
		this.setState({ date })
	}

	donationsReceivedCard = () => {
		return (
			this.state.donationDetailsVisibility
				? this.donationDetails()
				: this.donationsReceived()
		)
	}

	selectTypeOfDonation = () => {
		return (
			<FormControl className={styles.select} >
				<InputLabel id="demo-simple-select-helper-label">Tipo de doação</InputLabel>
				<Select
					labelId="demo-simple-select-helper-label"
					id="demo-simple-select-helper"
					value={this.state.donationType}
					onChange={(e) => this.setState({ donationType: e.target.value })}
					className={styles.select}
				>
					<MenuItem value={'money'}>Dinheiro</MenuItem>
					<MenuItem value={'portion'}>Ração</MenuItem>
					<MenuItem value={'medicines'}>Remédios</MenuItem>
					<MenuItem value={'others'}>Outros</MenuItem>
				</Select>
			</FormControl>
		)
	}

	selectStateOfDonation = () => {
		return (
			<FormControl className={styles.select} >
				<InputLabel id="demo-simple-select-helper-label">Estado da doação</InputLabel>
				<Select
					labelId="demo-simple-select-helper-label"
					id="demo-simple-select-helper"
					value={this.state.donationReceived}
					onChange={(e) => this.setState({ donationReceived: e.target.value })}
					className={styles.select}
				>
					<MenuItem value={false}>Não recebido</MenuItem>
					<MenuItem value={true}>Recebido</MenuItem>
				</Select>
			</FormControl>
		)
	}

	donationDetails = () => {
		if (!this.state.donationDetails) return

		return (
			<div className={styles.cardMoney} id="card-detail-render">
				<div className={styles.cardContainer} id="dtailedRequest">
					<div className={styles.headCard}>
						<div>
							<strong>Detalhes da solicitação de doação de </strong>
							<strong>{this.state.donationDetails.name}</strong>
						</div>
						<div>
							<i className='bx bx-x bx-sm' onClick={this.toggleVisibilityOfDonationDetails}></i>
						</div>
					</div>
					<div>
						<div>
							<MDBInput type="textarea" label="Descrição" value={this.state.donationDetails.description} disabled className={styles.descriptionDonation} />
						</div>
						<div className={styles.contactAction}>
							<div>
								<i className='bx bxs-phone bx-sm'  ></i>
								<strong>{this.state.donationDetails.cellNumber}</strong>
							</div>
							<button onClick={this.changeStateOfDonation}>{this.state.donationDetails.donationReceived ? '✔ Recebido' : 'Receber'}</button>
						</div>
					</div>
				</div>
			</div>
		)
	}

	changeStateOfDonation = async () => {
		await axios.put(`${baseApiUrl}/donation/change-state/${this.state.donationDetails.id}/${!this.state.donationDetails.donationReceived}`)
			.then(_ => {
				let donationDetails = { ...this.state.donationDetails }
				donationDetails.donationReceived = !donationDetails.donationReceived

				window.alert('Estado da doação alterado com sucesso!')
				this.setState({ donationDetails })
			})
			.catch(err => {
				console.log(err)
				window.alert('Ocorreu um erro ao obter doações')
			})

	}

	donationsReceived = () => {
		return (
			<div className={styles.cardMoney} id="card-detail-render">
				<div className={styles.iconDescriptionCard}>
					<i className='bx bx-donate-heart bx-sm' ></i>
					<strong>Doações recebidas</strong>
				</div>
				<div className={styles.detailedDonationDescription}>
					<div>
						<i className='bx bx-dollar' ></i>
						<strong>Dinheiro</strong>
						<span> 1781,55</span>
					</div>
					<div>
						<i className='bx bx-cookie'></i>
						<strong>Ração</strong>
						<span> 84</span>
					</div>
					<div>
						<i className='bx bx-plus-medical'></i>
						<strong>Remédios</strong>
						<span> 8</span>
					</div>
					<div>
						<i className='bx bxs-box' ></i>
						<strong>Diversos</strong>
						<span> 17</span>
					</div>
				</div>
			</div>
		)
	}

	toggleVisibilityOfDonationDetails = (donation) => {
		let donationDetailsVisibility = donation.id == this.state.donationDetails.id && this.state.donationDetailsVisibility == true? false : true

		this.setState({ donationDetailsVisibility: donationDetailsVisibility, donationDetails: donation })
	}

	render = () => {
		return (
			<div className={styles.container}>
				<div className={styles.pageName}>
					<span>DOAÇÕES</span>
				</div>
				<div className={styles.formDivider}>
					<div className={styles.registerMoneyDonation}>
						{this.donationsReceivedCard()}
						<div className={styles.registerDonation}>
							<div className={styles.iconDescriptionCard}>
								<i className='bx bx-add-to-queue bx-sm'  ></i>
								<strong>Registrar uma doação</strong>
							</div>
							<div className={styles.formRegisterDonation}>
								<DatePicker label={'Data'}
									value={this.state.date} onChangeDate={this.changeDate}
								/>
								{this.selectTypeOfDonation()}
								{this.selectStateOfDonation()}
								<MDBInput label="Nome" outline
									value={this.state.name} onChange={e => this.setState({ name: e.target.value })}
								/>
								<MDBInput label="Telefone" outline
									value={this.state.cellNumber} onChange={e => this.setState({ cellNumber: e.target.value })}
								/>
								<MDBInput type="textarea" label="Descrição" className={styles.descriptionInput}
									value={this.state.description} onChange={e => this.setState({ description: e.target.value })}
								/>
								<button className={styles.btnSubimit} onClick={this.saveDonation}>FINALIZAR</button>
							</div>
						</div>
					</div>
					<div className={styles.appRequestDonationList}>
						<DonationsTable donations={this.state.donations} onToggleVisibilityOfDonationDetails={this.toggleVisibilityOfDonationDetails} />
					</div>
				</div>
			</div>
		)
	}
}

export default Donations