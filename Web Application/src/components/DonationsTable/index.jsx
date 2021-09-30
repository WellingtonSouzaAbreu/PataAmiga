import React, { Component } from "react";
import { IconButton } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

import { formatDate } from '../../common/commonFunctions.js'

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

	onRowDelete = (rowsSelected) => {
		let donationsIdSelected = rowsSelected.data.map(rowSelected => this.props.donations[rowSelected.index].id)

		console.log(donationsIdSelected)
		this.props.onDelete(donationsIdSelected)
	}

	render = () => {

		let donations = this.props.donations

		let donationsWithButtons = this.setDetailButton(donations)
		donationsWithButtons = this.setEditButton(donationsWithButtons)

		return (
			<MUIDataTable
				title={"Solicitações pelo App"}
				data={donationsWithButtons}
				columns={[
					{
						name: "id",
						label: "ID",
						options: {
							filter: true,
							sort: true,
							display: true
						}
					},
					{
						name: "date",
						label: "Data",
						options: {
							filter: true,
							sort: true,
							customBodyRender: (date) => formatDate(date)
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
				]}
				options={{
					filterType: 'checkbox',
					elevation: 0,
					filter: false,
					print: false,
					rowsPerPage: this.props.rowsPerPage,
					rowsPerPageOptions: [8], // TODO Mais do que isso quebra o layout
					searchPlaceholder: 'Nome...',
					rowHover: true,
					page: this.props.currentPage,
					onRowsDelete: this.onRowDelete,
					customSearch: () => true,
					onSearchChange: (text) => this.props.onChangeSearchParams({ searchParam: text }),
					onChangePage: (currentPage) => this.props.onChangePage({ currentPage }),
					onChangeRowsPerPage: (rowsPerPage) => this.props.onChangeRowsPerPage({ rowsPerPage })
				}}
			/>
		)
	}
}

export default DonationsTable
