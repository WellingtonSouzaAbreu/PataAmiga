import React from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';

import AddEvent from "../AddEvent/index.jsx";
import AddTemporaryHome from "../AddTemporaryHome/index.jsx";

const useStyles = makeStyles((theme) =>
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
			width: '30%',
			height: '50vh',
			overflowY: 'auto'
		},
	}),
);

export default function TemporaryHomeEditModal(props) {

	const classes = useStyles();
	const [open, setVisibility] = React.useState(false);

	const handleOpen = () => {
		setVisibility(true);
	};

	const handleClose = () => {
		setVisibility(false);
		props.onRefresh(true)
	};


	return (
		<div>
			<IconButton aria-label="delete" color="primary" onClick={handleOpen}>
				<i class='bx bxs-edit'></i>
			</IconButton>

			<Modal
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<AddTemporaryHome temporaryHome={props.temporaryHome} edit={props.edit} onCloseModal={handleClose} onRefresh={props.onRefresh} />
					</div>
				</Fade>
			</Modal>
		</div>
	)
}