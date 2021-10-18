import { Component } from 'react'

import MUIDataTable from "mui-datatables";
import styles from './styles.module.css'

import InterestedDetails from '../InterestedDetails';

class InterestedTable extends Component {

	onRowDelete = (rowsSelected) => {
		let interestedsIdSelected = rowsSelected.data.map(rowSelected => this.props.interestedsInAdopt[rowSelected.index].id)

		console.log(interestedsIdSelected)
		this.props.onDelete(interestedsIdSelected)
	}

	render() {
		return (
			<MUIDataTable
				title={"Interessados em adotar"}
				data={this.props.interestedsInAdopt}
				columns={[
					{
						name: "id",
						label: "ID",
						options: {
							filter: true,
							sort: true,
						}
					},
					{
						name: "animalName",
						label: "Animal",
						options: {
							filter: true,
							sort: true,
						}
					},
					{
						name: "userName",
						label: "Interessado",
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
							customBodyRender: (verified) => verified == 1 ? 'Sim' : 'Não'
						}
					},
					{
						name: "details",
						label: "Detalhes",
						options: {
							filter: true,
							sort: false,
							customBodyRender: (value, tableMeta) => {
								const index = tableMeta.rowIndex
								return <InterestedDetails interestedInAdopt={this.props.interestedsInAdopt[index]} onToggleStateOfInterest={this.props.onToggleStateOfInterest}/>
							}
						}
					},

				]}
				options={{
					filterType: 'checkbox',
					elevation: 0,
					filter: false,
					print: false,
					rowsPerPage: this.props.rowsPerPage,
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

export default InterestedTable
