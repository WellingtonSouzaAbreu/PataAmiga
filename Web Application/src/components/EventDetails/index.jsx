import React, { Component } from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios'

// import styles from './style.module.css'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import EventDetailsContent from "./../../components/EventDetailsContent";

/* const useStyles = makeStyles((theme) => // TODO makeStyles só funciona em comonent funcional
	createStyles({
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},

		paper: {
			backgroundColor: theme.palette.background.paper,
			border: 'none',
			borderRadius: 5,
			boxShadow: theme.shadows[5],
			width: '60%',
			height: '75vh',
			overflowY: 'auto'
		},
	}),
);
 */
const initialState = {
	publication: {},
	modalVisible: false
}

class EventDetails extends Component {

	state = { ...initialState }
	
	showModalAndLoadDetails = async() => {
		await this.getDetailsOfPublication()
		this.setState({ modalVisible: true })
	};

	closeModal = () => {
		this.setState({ modalVisible: false })
	};

	getDetailsOfPublication = async () => {
		await axios.get(`${baseApiUrl}/publication/${this.props.idPublication}`)
			.then(res => {
				console.log(res.data)
				this.setState({ publication: res.data })
			})
			.catch(err => {
				console.log(err)
				window.alert('Erro ao solicitar dados detalhados da publicação!')
			})
	}
	render() {

		const classes = {
			modal: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			},
			paper: {
				// backgroundColor: theme.palette.background.paper, // TODO 'theme' só funciona em comonent funcional
				border: 'none',
				borderRadius: 5,
				// boxShadow: theme.shadows[5],
				width: '60%',
				height: '75vh',
				overflowY: 'auto'
			}
		}

		return (
			<div>
				<IconButton aria-label="delete" color="primary" onClick={this.showModalAndLoadDetails}>
					<i className='bx bxs-detail' ></i>
				</IconButton>

				<Modal
					className={classes.modal}
					open={this.state.modalVisible}
					onClose={this.closeModal}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<Fade in={this.state.modalVisible}>
						<div className={classes.paper}>
							<EventDetailsContent publication={this.state.publication} />
						</div>
					</Fade>
				</Modal>
			</div>
		)
	}
}

export default EventDetails