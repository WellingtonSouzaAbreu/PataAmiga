import React from "react";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';

import AnimalDetailsContent from "./../AnimalDetailsContent/index.jsx";

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
			width: '80%',
			height: '80vh',
			overflowY: 'auto'
		},
	}),
);

export default function AnimalDetails(props) {

	const classes = useStyles();
	const [open, setVisibility] = React.useState(false);

	const handleOpen = () => {
		setVisibility(true);
	};

	const handleClose = () => {
		setVisibility(false);
	};

	
	return (
		<div>
			<div onClick={handleOpen}>
				<i className={`${props.icon}`} ></i>
			</div>

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
						<AnimalDetailsContent idAnimal={props.idAnimal}/>
					</div>
				</Fade>
			</Modal>
		</div>
	)
}