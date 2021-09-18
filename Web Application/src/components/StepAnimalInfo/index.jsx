import { Storefront } from '@material-ui/icons'
import React from 'react'
import styles from './styles.module.css'


import { MDBInput } from "mdbreact";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { DropzoneArea } from 'material-ui-dropzone'


export default function StepInfoAnimal(){

    //Seleciona o sexo do animal
function SelectAnimalSex() {
	const [sex, setSex] = React.useState('');
	const handleChange = (event, value) => {
		setSex(event.target.value);
	};
	return (
		<FormControl className={styles.selectComponent} >
			<InputLabel id="demo-simple-select-helper-label">Qual o sexo do animal?</InputLabel>
			<Select
				labelId="demo-simple-select-helper-label"
				id="demo-simple-select-helper"
				value={sex}
				onChange={handleChange}
			>
				<MenuItem value=""></MenuItem>
				<MenuItem value={10}>Macho</MenuItem>
				<MenuItem value={20}>Fêmea</MenuItem>

			</Select>
			<FormHelperText>Selecione uma opção</FormHelperText>
		</FormControl>
	)
}

//Seleciona se o animal é castrado ou não
function SelectCastred() {
	const [castred, setCastred] = React.useState('');
	const handleChange = (event, value) => {
		setCastred(event.target.value);
	};
	return (
		<FormControl className={styles.selectComponent} >
			<InputLabel id="demo-simple-select-helper-label">Animal castrado?</InputLabel>
			<Select
				labelId="demo-simple-select-helper-label"
				id="demo-simple-select-helper"
				value={castred}
				onChange={handleChange}
			>
				<MenuItem value=""></MenuItem>
				<MenuItem value={10}>Sim</MenuItem>
				<MenuItem value={20}>Não</MenuItem>

			</Select>
			<FormHelperText>Selecione uma opção</FormHelperText>
		</FormControl>
	)
}

//Escolhe as imagens do animal
function UploadAnimalImages() {
	return (
		<DropzoneArea
            dropzoneClass = {styles.boxUpload}
            filesLimit = {3}
			acceptedFiles={['image/*']}
			dropzoneText={"Selecione imagens do animal"}
			onChange={(files) => console.log('Files:', files)}
		/>
	)
}

    return(
        <div className={styles.container}>
            <div className={styles.formCreate}>
                <div className={styles.containerForm}>
                    <div className={styles.sectionDiv}>
                        <MDBInput label="Nome provisório" className={styles.inputs} outline />
                        <MDBInput label="Apelido" className={styles.inputs} outline />
                        <MDBInput label="Cor" className={styles.inputs} outline />
                    </div>
                    <div className={styles.sectionDiv}>
                        <MDBInput label="Especie" className={styles.inputs} outline />
                        <MDBInput label="Raça" className={styles.inputs} outline />
                        <MDBInput label="Idade Aproximada" className={styles.inputs} outline />   
                    </div>
                    <div className={styles.sectionDiv}>
                        <div className={styles.castredSex}>
                            <SelectAnimalSex/>
                            <SelectCastred/>
                        </div>
                        <MDBInput type="textarea" label="Descrição" className={styles.descriptionInput} />
                    </div>
                    <div className={styles.sectionUploadSubmit}>
                        <UploadAnimalImages/>
                    </div>
                </div>
            </div>
        </div>
    )
}