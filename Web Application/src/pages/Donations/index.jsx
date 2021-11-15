import React, { Component } from "react";
import axios from 'axios'
import { MDBInput } from "mdbreact";

import styles from './styles.module.css'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import CustomSnackbar from "../../components/CustomSnackbar"
import AddDonation from './../../components/AddDonation/index.jsx'
import DonationsTable from "../../components/DonationsTable/index.jsx";

const initialState = {
	donationDetailsVisibility: false,
	donationDetails: {},

	donations: [],

	numberOfDonationsReceived: {
		money: 0,
		portion: 0,
		medicines: 0,
		others: 0
	},

	searchParam: '',
	rowsPerPage: 9,
	currentPage: 0,
	maxPageOpened: -1,

	snackbarVisible: false,
    snackbarMessage: '',
    snackbarType: 'info'
}

class Donations extends Component {

	state = { ...initialState }

	componentDidMount = async () => {
		await this.loadDonations()
	}

	loadDonations = async (noConcat) => {
		let filterParams = ''
		let page = '0'
		if (this.state.searchParam) {
			filterParams = `?name=${this.state.searchParam}`
		}

		if (this.state.currentPage || this.state.currentPage == 0) {
			page = `${filterParams ? '&' : '?'}page=${this.state.currentPage}`
		}

		let rowsPerPage = `${filterParams || page ? '&' : '?'}rowsPerPage=${this.state.rowsPerPage}`
		await axios.get(`${baseApiUrl}/donation${filterParams}${page}${rowsPerPage}`)
			.then(res => {
				noConcat ? this.setState({ donations: [...res.data] }, this.loadNumberOfDonationsReceived) : this.setState({ donations: [...this.state.donations, ...res.data] }, this.loadNumberOfDonationsReceived)
			})
			.catch(err => {
				console.log(err)
				this.toggleSnackbarVisibility(true, `Houve um erro ao obter doações!`, 'error')
			})
	}

	loadNumberOfDonationsReceived = async () => {
		await axios.get(`${baseApiUrl}/donation/number-of-donations-received`)
			.then(res => {
				this.setState({ numberOfDonationsReceived: res.data })
			})
			.catch(err => {
				console.log(err)
				this.toggleSnackbarVisibility(true, `Houve um erro ao obter o numero de doações recebidas!`, 'error')
			})
	}

	deleteDonation = async (idDonation) => {
		await axios.delete(`${baseApiUrl}/donation/${idDonation}`) // Array de id
			.then(_ => {
				this.toggleSnackbarVisibility(true, `Doaç${idDonation.length > 1 ? 'ões' : ''} deletada${idDonation.length > 1 ? 's' : ''} com sucesso!`, 'success')
				this.loadDonations(true)
			})
			.catch(err => {
				console.log(err)
				this.toggleSnackbarVisibility(true, `Houve um erro ao deletar denúncia!`, 'error')
			})
	}

	changePage = (dataField) => {
		let pageChanged = false

		if (dataField.currentPage) {
			pageChanged = dataField.currentPage > this.state.maxPageOpened
		}

		this.setState({ ...dataField, maxPageOpened: pageChanged ? dataField.currentPage : this.state.maxPageOpened }, pageChanged ? this.loadDonations : null)
	}

	changeRowsPerPage = (dataField) => {
		let rowsPerPageChanged = false

		if (dataField.rowsPerPage && dataField.rowsPerPage != this.state.rowsPerPage) {
			rowsPerPageChanged = true
			dataField = { ...dataField, currentPage: 0, maxPageOpened: -1 }
		}

		this.setState({ ...dataField, donations: rowsPerPageChanged ? [] : this.state.donations }, this.loadDonations)
	}

	changeSearchParams = (dataField) => {
		this.setState({ ...dataField, donations: [], currentPage: 0 }, this.loadDonations)
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
							<i className='bx bx-x bx-sm' onClick={() => this.toggleVisibilityOfDonationDetails()}></i>
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

	donationsReceivedCard = () => {
        return (
            this.state.donationDetailsVisibility
                ? this.donationDetails()
                : this.donationsReceived()
        )
    }

	changeStateOfDonation = async () => {
		await axios.put(`${baseApiUrl}/donation/change-state/${this.state.donationDetails.id}/${!this.state.donationDetails.donationReceived}`)
			.then(_ => {
				let donationDetails = { ...this.state.donationDetails }
				donationDetails.donationReceived = !donationDetails.donationReceived
				this.setState({ donationDetails }, () => this.loadDonations(true))
			})
			.catch(err => {
				console.log(err)
				this.toggleSnackbarVisibility(true, `Houve um erro ao alterar o estado da doação!`, 'error')
			})

	}

	donationsReceived = () => {
		return (
			<div className={styles.cardMoney} id="card-detail-render">
				<div className={styles.iconDescriptionCard}>
					<i className='bx bx-donate-heart bx-sm' ></i>
					<strong>Número de doações recebidas</strong>
				</div>
				<div className={styles.detailedDonationDescription}>
					<div>
						<i className='bx bx-dollar' ></i>
						<strong>Dinheiro</strong>
						<span> {this.state.numberOfDonationsReceived.money}</span>
					</div>
					<div>
						<i className='bx bx-cookie'></i>
						<strong>Ração</strong>
						<span> {this.state.numberOfDonationsReceived.portion}</span>
					</div>
					<div>
						<i className='bx bx-plus-medical'></i>
						<strong>Remédios</strong>
						<span> {this.state.numberOfDonationsReceived.medicines}</span>
					</div>
					<div>
						<i className='bx bxs-box' ></i>
						<strong>Diversos</strong>
						<span> {this.state.numberOfDonationsReceived.others}</span>
					</div>
				</div>
			</div>
		)
	}

	toggleVisibilityOfDonationDetails = (donation) => {
		if (!donation) {
			this.setState({ donationDetailsVisibility: false })
			return
		}

		let donationDetailsVisibility = donation.id == this.state.donationDetails.id && this.state.donationDetailsVisibility == true ? false : true

		this.setState({ donationDetailsVisibility: donationDetailsVisibility, donationDetails: donation })
	}

	toggleSnackbarVisibility = (visibility, message, type) => {
		if (visibility) {
			this.setState({ snackbarVisible: visibility, snackbarMessage: message, snackbarType: type })
		} else {
			this.setState({ snackbarVisible: !!visibility })
		}
	}

	render = () => {
		return (
			<div className={styles.container}>
				<div className={styles.pageName}>
					<span onClick={this.loadDonations}>DOAÇÕES</span> 
				</div>
				<div className={styles.formDivider}>
					<AddDonation onDonationsReceivedCard={this.donationsReceivedCard} onRefresh={this.loadDonations}/>
					<div className={styles.appRequestDonationList}>
						<DonationsTable donations={this.state.donations} currentPage={this.state.currentPage} rowsPerPage={this.state.rowsPerPage} onRefresh={this.loadDonations}
							onDelete={this.deleteDonation} onToggleVisibilityOfDonationDetails={this.toggleVisibilityOfDonationDetails}
							onChangePage={this.changePage} onChangeRowsPerPage={this.changeRowsPerPage} onChangeSearchParams={this.changeSearchParams}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default Donations