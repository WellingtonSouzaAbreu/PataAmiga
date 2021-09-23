import React from 'react'
import styles from './styles.module.css'


import { MDBInput } from "mdbreact";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { DropzoneArea } from 'material-ui-dropzone'


export default function StepInfoAnimal(props) {

	let pictures = []

	const SelectAnimalSex = () => {
		return (
			<FormControl className={styles.selectComponent} >
				<InputLabel id="demo-simple-select-helper-label">Qual o sexo do animal?</InputLabel>
				<Select
					labelId="demo-simple-select-helper-label"
					id="demo-simple-select-helper"
					value={props.sex}
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
					value={props.castrated}
					onChange={(e) => props.onChange({ castrated: e.target.value })}
				>
					<MenuItem value={true}>Sim</MenuItem>
					<MenuItem value={false}>Não</MenuItem>

				</Select>
				<FormHelperText>Selecione uma opção</FormHelperText>
			</FormControl>
		)
	}

	function UploadAnimalImages() {
		return (
			<DropzoneArea
				dropzoneClass={styles.boxUpload}
				filesLimit={3}
				acceptedFiles={['image/*']}
				dropzoneText={"Selecione imagens do animal"}
				onChange={(files) => changeSelectedImage(files)}
			/>
		)
	}

	const changeSelectedImage = (files) => { // TODO Ao mudar o estado o preview da imagem some
		pictures = files
		setTimeout(() => {
			!!files.length && props.onSelectPicture(pictures)
		}, 1000)
		return
	}

	return (
		<div className={styles.container}>
			<div className={styles.formCreate}>
				<div className={styles.containerForm}>
					<div className={styles.sectionDiv}>
						<MDBInput label="Nome provisório" className={styles.inputs} outline
							value={props.animal.name} onChange={(e) => props.onChange({ name: e.target.value })} />
						<MDBInput label="Apelido" className={styles.inputs} outline // TODO é necessário?
							value={props.animal.surname} onChange={(e) => props.onChange({ surname: e.target.value })} />
						<MDBInput label="Cor" className={styles.inputs} outline
							value={props.animal.color} onChange={(e) => props.onChange({ color: e.target.value })} />
					</div>
					<div className={styles.sectionDiv}>
						<MDBInput label="Especie" className={styles.inputs} outline
							value={props.animal.specie} onChange={(e) => props.onChange({ specie: e.target.value })} />
						<MDBInput label="Raça" className={styles.inputs} outline
							value={props.animal.breed} onChange={(e) => props.onChange({ breed: e.target.value })} />
						<MDBInput label="Idade Aproximada" className={styles.inputs} outline //TODO trocar por data de nascimento
							value={props.animal.aproximateAge} onChange={(e) => props.onChange({ aproximateAge: e.target.value })} />
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