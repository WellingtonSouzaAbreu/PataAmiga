import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { IconButton } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { MDBInput } from "mdbreact";

import styles from './styles.module.css'

import CardDetailDonationReceived from '../../pages/Donations/index.jsx'
import { DomainPropTypes } from "@material-ui/pickers/constants/prop-types";


const columns = [
	{
		name: "date",
		label: "Data",
		options: {
			filter: true,
			sort: true,
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
		name: "type",
		label: "Tipo",
		options: {
			filter: true,
			sort: false,
		}
	},
	{
		name: "details",
		label: "Detalhes",
		options: {
			filter: true,
			sort: false,
		}
	},
];

const options = {
	filterType: 'checkbox',
	elevation: 0,
	filter: false,
	print: false,
	rowsPerPage: 15,
}

const initialState = {

}

class DonationsTable extends Component {
	state = { ...initialState }

	data = () => {
		return  [
			{ date: "15/09/2021", name: "Lucas Marrtins", type: "Dinheiro", details: <this.IconRequestDetails /> },
			{ date: "15/09/2023", name: "Lucas dsfdf", type: "Ração", contact: "94840510" },
			{ date: "15/09/2021", name: "Lucas Marrtins", type: "Dinheiro", contact: "984841812" },
			{ date: "15/09/2023", name: "Lucas dsfdf", type: "Ração", contact: "94840510" },

			{ date: "15/09/2021", name: "Lucas Marrtins", type: "Dinheiro", contact: "984841812" },
			{ date: "15/09/2023", name: "Lucas dsfdf", type: "Ração", contact: "94840510" },

			{ date: "15/09/2021", name: "Lucas Marrtins", type: "Dinheiro", contact: "984841812" },
			{ date: "15/09/2023", name: "Lucas dsfdf", type: "Ração", contact: "94840510" },

			{ date: "15/09/2021", name: "Lucas Marrtins", type: "Dinheiro", contact: "984841812" },
			{ date: "15/09/2023", name: "Lucas dsfdf", type: "Ração", contact: "94840510" },

			{ date: "15/09/2021", name: "Lucas Marrtins", type: "Dinheiro", contact: "984841812" },
			{ date: "15/09/2023", name: "Lucas dsfdf", type: "Ração", contact: "94840510" },
		];
	}

	IconRequestDetails = () => {
		return (
			<IconButton aria-label="delete" color="primary" onClick={this.showDonationDetails}>
				<i className='bx bx-calendar-edit'></i>
			</IconButton>
		)
	}

	showDonationDetails = () => {
		this.props.onToggleVisibilityOfDonationDetails(true)
	}

	render = () => {
		return (
			<MUIDataTable
				title={"Solicitações pelo App"}
				data={this.data()}
				columns={columns}
				options={options}
			/>
		)
	}
}

export default DonationsTable
