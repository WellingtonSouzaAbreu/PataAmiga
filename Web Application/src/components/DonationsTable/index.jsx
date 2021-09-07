import React, { Component } from "react";
import { IconButton } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

import { formatDate } from './../../common/commonFunctions.js'

const columns = [
	{
		name: "dateTime",
		label: "Data",
		options: {
			filter: true,
			sort: true,
			customBodyRender: (dateTime) => formatDate(dateTime)
		}
	},
	{
		name: "name",
		label: "Nome",
		options: {
			filter: true,
			sort: false,
		}
	},
	{
		name: "donationType",
		label: "Tipo",
		options: {
			filter: true,
			sort: false,
			customBodyRender: (donationType) => {
				switch (donationType) {
					case 'money': return 'Dinheiro'
					case 'portion': return 'Ração'
					case 'medicines': return 'Remédios'
					case 'others': return 'Outros'
				}
			}
		}
	},
	{
		name: "detailButton",
		label: "Detalhes",
		options: {
			filter: true,
			sort: false,
		}
	},
	{
		name: "editButton",
		label: "Editar",
		options: {
			filter: true,
			sort: false,
		}
	}
];

class DonationsTable extends Component {

	setDetailButton = (donations) => {
		return donations.map(donation => {
			donation.detailButton =
				<IconButton aria-label="delete" color="primary" onClick={() => this.showDonationDetails(donation)}>
					<i className='bx bx-calendar-edit'></i>
				</IconButton>

			return donation
		})
	}

	setEditButton = (donations) => {
		return donations.map(donation => {
			donation.editButton =
				<IconButton aria-label="delete" color="primary" onClick={() => window.alert('Funcionalidade ainda não implementada!')}>
					<i className='bx bx-calendar-edit'></i>
				</IconButton>

			return donation
		})
	}

	showDonationDetails = (donation) => {
		this.props.onToggleVisibilityOfDonationDetails(donation)
	}

	render = () => {

		let donations = this.props.donations

		let donationsWithButtons = this.setDetailButton(donations)
		donationsWithButtons = this.setEditButton(donationsWithButtons)

		return (
			<MUIDataTable
				title={"Solicitações pelo App"}
				data={donationsWithButtons}
				columns={columns}
				options={{
					filterType: 'checkbox',
					elevation: 0,
					filter: false,
					print: false,
					rowsPerPage: 15,
				}}
			/>
		)
	}
}

export default DonationsTable
