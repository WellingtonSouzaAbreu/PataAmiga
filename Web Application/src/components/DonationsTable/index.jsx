import React, { Component } from "react";
import MUIDataTable from "mui-datatables";

import { formatDate } from '../../common/commonFunctions.js'
import CustomModal from "../CustomModal";
import AddDonation from '../AddDonation';

class DonationsTable extends Component {

	showDonationDetails = (donation) => {
		this.props.onToggleVisibilityOfDonationDetails(donation)
	}

	onRowDelete = (rowsSelected) => {
		let donationsIdSelected = rowsSelected.data.map(rowSelected => this.props.donations[rowSelected.index].id)

		console.log(donationsIdSelected)
		this.props.onDelete(donationsIdSelected)
	}

	render = () => {
		return (
			<MUIDataTable
				title={"Solicitações pelo App"}
				data={this.props.donations}
				columns={[
					{
						name: "donationReceived",
						label: <i className='fas fa-clipboard-check' />,
						options: {
							filter: true,
							sort: true,
							display: true,
							customBodyRender: (donationReceived) => donationReceived ? <i className='fas fa-check' /> : <i className='fas fa-times' />
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
							customBodyRender: (value, tableMeta) => {
								const index = tableMeta.rowIndex
								return (
									<div onClick={() => this.showDonationDetails(this.props.donations[index])}>
										<i className='fas fa-info'></i>
									</div>
								)
							}
						}
					},
					{
						name: "editButton",
						label: "Editar",
						options: {
							filter: true,
							sort: false,
							customBodyRender: (_, tableMeta) => {
								const index = tableMeta.rowIndex
								return (
									<CustomModal width={'80%'} height={'80%'} icon={'fas fa-edit'}>
										<AddDonation donation = { this.props.donations[index] } edit = { true} onRefresh = { this.props.onRefresh } />
									</CustomModal>
								)
							}
						}
					}
				]}
				options={{
					filterType: 'checkbox',
					elevation: 0,
					filter: false,
					print: false,
					rowsPerPage: this.props.rowsPerPage,
					rowsPerPageOptions: [8],
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
