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

		return (
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
							<EventDetailsContent publication={this.state.publication} />
						</div>
					</Fade>
				</Modal>
			</div>
		)
	}
}

export default EventDetails