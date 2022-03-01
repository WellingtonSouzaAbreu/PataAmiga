import React from "react";
import { makeStyles,  createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import styles from './styles.module.css'

export default function CustomModal(props) {

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
                width: props.width,
                height: props.height,
                overflowY: 'auto'
            },
        }),
    );

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
            <div className={styles.icon}>
                <i class={props.icon} onClick={handleOpen}></i>
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
                    <div className={classes.paper} onCloseModal={handleClose}>
                        {props.children}
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}