import React from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


import AdoptionMonitoringTabPanel from "../AdoptionFollowUpContent";

import styles from './styles.module.css'

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
			width: '60%',
			height: '75vh',
			overflowY: 'auto'
		},
	}),
);

export default function ModalAdoptionMonitoring() {

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
            <button className={styles.btMonitoring} onClick={handleOpen}>
                <i class='bx bx-list-check bx-sm'></i>
                <span>Acompanhamento</span>
            </button>

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
						<AdoptionMonitoringTabPanel/>
					</div>
				</Fade>
			</Modal>
		</div>
	)
}