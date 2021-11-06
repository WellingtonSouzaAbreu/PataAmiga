import React, { Component } from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios'

import styles from './styles.module.css'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import EventDetailsContent from "./../../components/EventDetailsContent";
import CustomSnackbar from './../CustomSnackbar'

const initialState = {
	publication: {},
	modalVisible: false,

	snackbarVisible: false,
	snackbarMessage: '',
	snackbarType: 'info'
}

class EventDetails extends Component {

	state = { ...initialState }

	showModalAndLoadDetails = async () => {
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
				this.toggleSnackbarVisibility(true, `Ocorreu um erro ao obter detalhes da publicação!`,  'error')
			})
	}

	toggleSnackbarVisibility = (visibility, message, type) => {
		if (visibility) {
			this.setState({ snackbarVisible: visibility, snackbarMessage: message, snackbarType: type })
		} else {
			this.setState({ snackbarVisible: !!visibility })
		}
	}

	render() {
		return (
			<>
				<CustomSnackbar visible={this.state.snackbarVisible} message={this.state.snackbarMessage} type={this.state.snackbarType} onClose={this.toggleSnackbarVisibility} />
				<div>
					<IconButton aria-label="delete" color="primary" onClick={this.showModalAndLoadDetails}>
						<i className='bx bxs-detail' ></i>
					</IconButton>

					<Modal
						className={styles.modal}
						open={this.state.modalVisible}
						onClose={this.closeModal}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500,
						}}
					>
						<Fade in={this.state.modalVisible}>
							<div className={styles.paper}>
								<EventDetailsContent publication={this.state.publication} onRefresh={this.props.onRefresh} />
							</div>
						</Fade>
					</Modal>
				</div>
			</>
		)
	}
}

export default EventDetails