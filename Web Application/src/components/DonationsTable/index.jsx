import React, { Component } from "react";
import { IconButton } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

import { formatDate } from '../../common/commonFunctions.js'
import DonationEditModal from '../DonationEditModal/index.jsx';

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
							customBodyRender: (value, tableMeta) => {
								const index = tableMeta.rowIndex
								return (
									<IconButton aria-label="delete" color="primary" onClick={() => this.showDonationDetails(this.props.donations[index])}>
										<i className='bx bx-calendar-edit'></i>
									</IconButton>
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
							customBodyRender: (value, tableMeta) => {
								const index = tableMeta.rowIndex
								return <DonationEditModal donation={this.props.donations[index]} edit={true} onRefresh={this.props.onRefresh}/>
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
