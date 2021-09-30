import { Component } from 'react'
import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from 'axios'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import { formatDate } from './../../common/commonFunctions.js'
import ExpadendContent from '../ComplaintDetailsContent/index'


const columns = [
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
		name: "city",
		label: "Cidade",
		options: {
			filter: true,
			sort: true,
		}
	},
	{
		name: "district",
		label: "Bairro",
		options: {
			filter: true,
			sort: true,
		}
	},
	{
		name: "complaintType",
		label: "Tipo",
		options: {
			filter: true,
			sort: true,
		}
	},
	{
		name: "verified",
		label: "Verificado",
		options: {
			filter: true,
			sort: true,
			customBodyRender: (verified) => verified ? 'Sim' : 'Não'
		}
	},
];

class ComplaintsTable extends Component {

	toggleComplaintVerified = async (idComplaint, state) => {
		await axios.put(`${baseApiUrl}/complaint/change-state/${idComplaint}/${state}`)
			.then(_ => {
				window.alert(`Denúncia ${state ? '' : 'não'} verificada!`)
				this.props.onRefresh()
			})
			.catch(err => {
				console.log(err)
				window.alert('Algo deu errado ao alterar o estado da denúncia')
			})
	}

	onRowDelete = (rowsSelected) => {
		console.log(rowsSelected)
		let publicationsIdSelected = rowsSelected.data.map(rowSelected => this.props.complaints[rowSelected.index].id)

		console.log(publicationsIdSelected)
		this.props.onDelete(publicationsIdSelected)
	}

	render() {
		return (
			<MUIDataTable
				title={"Lista de Denúncias Recebidas"}
				data={this.props.complaints}
				columns={columns}
				options={{
					filterType: 'checkbox',
					filter: false,
					print: false,
					download: false,
					elevation: 0,
					expandableRows: true,
					expandableRowsHeader: true,
					expandableRowsOnClick: true,
					rowsPerPage: this.props.rowsPerPage,
                    searchPlaceholder: 'Nome...',
                    rowHover: true,
                    page: this.props.currentPage,
					onRowsDelete: this.onRowDelete,
                    customSearch: () => true,
                    onSearchChange: (text) => this.props.onChangeSearchParams({ searchParam: text }),
                    onChangePage: (currentPage) => this.props.onChangePage({ currentPage }),
                    onChangeRowsPerPage: (rowsPerPage) => this.props.onChangeRowsPerPage({ rowsPerPage }),
					renderExpandableRow: (rowData, rowMeta) => {
						console.log(rowMeta.dataIndex)
						const colSpan = rowData.length + 1;
						return (
							<TableRow>
								<TableCell colSpan={colSpan}>
									<ExpadendContent complaint={this.props.complaints[rowMeta.dataIndex]} onToggleComplaintVerified={this.toggleComplaintVerified} />
								</TableCell>
							</TableRow>
						)
					}
				}}
			/>
		)
	}
}


export default ComplaintsTable
