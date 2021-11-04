import React from 'react'
import { MDBInput } from "mdbreact";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { DropzoneArea } from 'material-ui-dropzone'

import styles from './styles.module.css'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import CustomDatePicker from './../CustomDatePicker/index.jsx'
import classNames from 'classnames';

let pictures = []

export default function StepInfoAnimal(props) {

	const SelectAnimalSex = () => {
		return (
			<FormControl className={styles.selectComponent} >
				<InputLabel id="demo-simple-select-helper-label">Qual o sexo do animal?</InputLabel>
				<Select
					labelId="demo-simple-select-helper-label"
					id="demo-simple-select-helper"
					value={props.animal.sex}
					onChange={(e) => props.onChange({ sex: e.target.value })}
				>
					<MenuItem value={'M'}>Macho</MenuItem>
					<MenuItem value={'F'}>Fêmea</MenuItem>

				</Select>
				<FormHelperText>Selecione uma opção</FormHelperText>
			</FormControl>
		)
	}

	function SelectCastrated() {
		return (
			<FormControl className={styles.selectComponent} >
				<InputLabel id="demo-simple-select-helper-label">Animal castrado?</InputLabel>
				<Select
					labelId="demo-simple-select-helper-label"
					id="demo-simple-select-helper"
					value={!!props.animal.castrated}
					onChange={(e) => props.onChange({ castrated: e.target.value })}
				>
					<MenuItem value={true}>Sim</MenuItem>
					<MenuItem value={false}>Não</MenuItem>

				</Select>
				<FormHelperText>Selecione uma opção</FormHelperText>
			</FormControl>
		)
	}

	console.log(!props.selectedPictures.length)
	function UploadAnimalImages() {
		return (
			<DropzoneArea
				dropzoneClass={styles.boxUpload}
				filesLimit={3}
				initialFiles={!props.selectedPictures.length && props.edit ? loadAnimalURLImages() : props.selectedPictures}
				acceptedFiles={['image/*']}
				dropzoneText={"Selecione imagens do animal"}
				onChange={(files) => changeSelectedImage(files)}
			/>
		)
	}

	function loadAnimalURLImages() {
		if (props.animal.imagesURL) {
			return props.animal.imagesURL.map(({ imageURL }) => {
				return `${baseApiUrl}/animal-pictures/${imageURL}`
			})
		}
		return []
	}

	const changeSelectedImage = (files) => { // TODO Ao mudar o estado o preview da imagem some
		pictures = files

		if (files.length === props.selectedPictures.length) { // Gambiarra do cacete
			for (let i = 0; i < files.length; i++) {
				let equal = false
				if (files[i].filename === props.selectedPictures[i].filename) {
					equal = true
					console.log('É igual')
				}
				if (equal) return
				console.log('Não é igual')
			}
		}

		console.log(files)
		console.log(props.selectedPictures)

		if (!!files.length) {
			props.onSelectPicture(pictures)
		} 
		return
	}

	console.log(props)

	return (
		<div className={classNames(styles.container)}>
			<div className={styles.formCreate}>
				<div className={styles.containerForm}>
					<div className={styles.sectionDiv}>
						<MDBInput label="Nome provisório" className={styles.inputs} outline
							value={props.animal.name} onChange={(e) => props.onChange({ name: e.target.value })} />
						<MDBInput label="Cor" className={styles.inputs} outline
							value={props.animal.color} onChange={(e) => props.onChange({ color: e.target.value })} />

						{/* TODO Estilizar checkbox (Não entendi esse componente, parece bugado)*/}
						<MDBInput label="Disponível para adoção?" type="checkbox" id=""
							checked={props.animal.availableForAdoption} onChange={(e) => props.onChange({ availableForAdoption: e.target.checked })}
						/>

					</div>
					<div className={styles.sectionDiv}>
						<MDBInput label="Especie" className={styles.inputs} outline
							value={props.animal.specie} onChange={(e) => props.onChange({ specie: e.target.value })} />
						<MDBInput label="Raça" className={styles.inputs} outline
							value={props.animal.breed} onChange={(e) => props.onChange({ breed: e.target.value })} />
						<CustomDatePicker label={'Idade Aproximada'} className={styles.inputs}
							value={props.animal.dateOfBirth} onChangeDate={props.onChangeDate}
						/>
					</div>
					<div className={styles.sectionDiv}>
						<div className={styles.castredSex}>
							<SelectAnimalSex />
							<SelectCastrated />
						</div>
						<MDBInput type="textarea" label="Descrição" className={styles.descriptionInput}
							value={props.animal.othersCharacteristics} onChange={(e) => props.onChange({ othersCharacteristics: e.target.value })}
						/>
					</div>
					<div className={styles.sectionUploadSubmit}>
						<UploadAnimalImages />
					</div>
				</div>
			</div>
		</div>
	)
}