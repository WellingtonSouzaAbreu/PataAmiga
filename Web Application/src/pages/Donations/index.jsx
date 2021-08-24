import React, { Component } from "react";

import { MDBInput } from "mdbreact";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { MenuItem } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Grid } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

import styles from './styles.module.css'

import TableDonations from "../../components/DonationsTable/index.jsx";

const initialState = {
	donationDetailsVisibility: true
}

class Donations extends Component {

	state = { ...initialState }

	SelectTipeOfDonation = () => {
		return (
			<FormControl className={styles.select} >
				<InputLabel id="demo-simple-select-helper-label">Tipo de doação</InputLabel>
				<Select
					labelId="demo-simple-select-helper-label"
					id="demo-simple-select-helper"
					value={10}
					onChange={() => console.log('value')}
					className={styles.select}
				>
					<MenuItem value=""></MenuItem>
					<MenuItem value={10}>Dinheiro</MenuItem>
					<MenuItem value={20}>Ração</MenuItem>
					<MenuItem value={30}>Remédios</MenuItem>
					<MenuItem value={40}>Outros</MenuItem>
				</Select>

			</FormControl>
		)
	}

	DataPicker = () => {
		const handleDateChange = (date = Date.now() | null) => {
			// this.setSelectedDate(date);
		};

		return (
			<MuiPickersUtilsProvider utils={DateFnsUtils} >
				<Grid className={styles.adjustSize}>
					<KeyboardDatePicker
						className={styles.adjustSize}
						disableToolbar
						variant="inline"
						format="MM/dd/yyyy"
						margin="normal"
						id="date-picker-inline"
						label="Data"
						value={this.selectedDate}
						onChange={this.handleDateChange}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}
					/>
				</Grid>

			</MuiPickersUtilsProvider>
		)
	}

	donationsReceivedCard = () => {
		return (
			this.state.donationDetailsVisibility
				? this.donationDetails()
				: this.donationsReceived()
		)
	}

	donationDetails = () => {
		return (
			<div className={styles.cardMoney} id="card-detail-render">
				<div className={styles.cardContainer} id="dtailedRequest">
					<div className={styles.headCard}>
						<div>
							<strong>Detalhes da solicitação de doação de </strong>
							<strong>Lucas Martins</strong>
						</div>
						<div>
							<i className='bx bx-x bx-sm' onClick={this.toggleVisibilityOfDonationDetails}></i>
						</div>
					</div>
					<div>
						<div>
							<MDBInput type="textarea" label="Descrição" value="300 Toneladas de Ração 300 Toneladas de Ração 300 Toneladas de Ração 300 Toneladas de Ração 300 Toneladas de Ração 300 Toneladas de Ração 300 Toneladas de Ração 300 Toneladas de Ração 300 Toneladas de Ração300 Toneladas de Ração  " disabled className={styles.descriptionDonation} />
						</div>
						<div className={styles.contactAction}>
							<div>
								<i className='bx bxs-phone bx-sm'  ></i>
								<strong>984843815</strong>
							</div>
							<button>Aceitar</button>
						</div>
					</div>
				</div>
			</div>
		)
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
						<i className='bx bxs-box' ></i>
						<strong>Diversos</strong>
						<span> 17</span>
					</div>
					<div>
						<i className='bx bx-plus-medical'></i>
						<strong>Remédios</strong>
						<span> 8</span>
					</div>
					<div>
						<i className='bx bx-cookie'></i>
						<strong>Ração</strong>
						<span> 84</span>
					</div>
				</div>
			</div>
		)
	}

	toggleVisibilityOfDonationDetails = (visibility) => {
		this.setState({ donationDetailsVisibility: !this.state.donationDetailsVisibility })
	}

	render = () => {
		return (
			<div className={styles.container}>
				<div className={styles.pageName}>
					<span>DOAÇÕES</span>
				</div>
				<div className={styles.formDivider}>
					<div className={styles.registerMoneyDonation}>
						<this.donationsReceivedCard />
						<div className={styles.registerDonation}>
							<div className={styles.iconDescriptionCard}>
								<i className='bx bx-add-to-queue bx-sm'  ></i>
								<strong>Registrar uma doação</strong>
							</div>
							<div className={styles.formRegisterDonation}>
								<this.DataPicker />
								<this.SelectTipeOfDonation />
								<MDBInput label="Nome" outline />
								<MDBInput label="Telefone" outline />
								<MDBInput label="Quantidade" outline />
								<MDBInput type="textarea" label="Descrição" className={styles.descriptionInput} />
								<button className={styles.btnSubimit}>FINALIZAR</button>
							</div>
						</div>
					</div>
					<div className={styles.appRequestDonationList}>
						<TableDonations onToggleVisibilityOfDonationDetails={this.toggleVisibilityOfDonationDetails} />
					</div>
				</div>
			</div>
		)
	}
}

export default Donations