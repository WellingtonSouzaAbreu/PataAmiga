import React from "react";
import styles from './styles.module.css'

import { MDBInput } from "mdbreact";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,

	KeyboardDatePicker,
} from '@material-ui/pickers';


import { DropzoneArea } from 'material-ui-dropzone'


function DataPicker() {
	const [selectedDate, setSelectedDate] = React.useState(
		new Date('2014-08-18T21:11:54'),
	);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid className={styles.fullWidthAdjsut}>
				<KeyboardDatePicker
					className={styles.fullWidthAdjsut}
					disableToolbar
					variant="inline"
					format="MM/dd/yyyy"
					margin="normal"
					id="date-picker-inline"
					label="Data do evento"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	)

}

function SelectEventType() {
	const [event, setEvent] = React.useState('');
	const handleChange = (event, value) => {
		setEvent(event.target.value);
	};
	return (
		<FormControl className={styles.fullWidthAdjsut} >
			<InputLabel id="demo-simple-select-helper-label">Tipo de publicação</InputLabel>
			<Select
				labelId="demo-simple-select-helper-label"
				id="demo-simple-select-helper"
				value={event}
				onChange={handleChange}
			>
				<MenuItem value=""></MenuItem>
				<MenuItem value={10}>Criar Post de Evento</MenuItem>
				<MenuItem value={20}>Criar Post de adoção</MenuItem>

			</Select>
			<FormHelperText>Selecione uma opção</FormHelperText>
		</FormControl>
	)
}

function ImageUploadComponent() {
	return (
		<DropzoneArea
			acceptedFiles={['image/*']}
			dropzoneText={"Slecione a imagem"}
			onChange={(files) => console.log('Files:', files)}
		/>
	)
}

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			width: '100%',
		},

	}),
);

const CssTextField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: 'green',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'green',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'red',
			},
			'&:hover fieldset': {
				borderColor: 'yellow',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'green',
			},
		},
	},
})(TextField);


export default function FormAddEvent() {
	const classes = useStyles();
	return (
		<div className={styles.container}>
			<Accordion >
				<AccordionSummary
					expandIcon={<i className='bx bx-down-arrow-alt'></i>}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={styles.heading}>
						<i className='bx bxs-calendar-plus'></i>
						<span className={styles.spanAdjust}>Criar uma nova publicação</span>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div className={styles.formCreate}>
						<div className={styles.nameDescription}>
							<MDBInput label="Nome do evento" outline />
							<SelectEventType />
							<DataPicker />
							<MDBInput type="textarea" label="Descrição" className={styles.descriptionInput} />
						</div>
						<div className={styles.locationEvent}>
							<MDBInput label="Local" outline />
							<MDBInput label="Bairro" outline />
							<MDBInput label="Cidade" outline />
							<ImageUploadComponent />
						</div>
					</div>
					<div className={styles.confirmButton}>
						<button className={styles.buttonCreateEvent}>
							Criar Evento
						</button>
					</div>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}