import React, { Component } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, Modal, ScrollView, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import { ImageBrowser } from 'expo-image-picker-multiple'
import axios from 'axios'

import styles from './styles'


import { baseApiUrl } from "../../common/baseApiUrl.js";
import PhotoSelectIndicator from './../../components/PhotoSelectIndicator'
import SelectAnimalAdopted from "../../components/SelectAnimalAdopted";

const initialState = {
	adoptionId: null,
	observations: 'Ele anda comendo cocô, mas está saudável',
	imagesPack: [],

	numberOfAdoptions: 0,

	selectAnimalAdoptedVisible: true,
	imageBrowserVisible: false,
}

export default class RegularReport extends Component {

	state = { ...initialState }

	componentDidMount = async () => {
		await axios.get(`${baseApiUrl}/adoption/number-by-user`)
			.then(res => {
				this.setState({ numberOfAdoptions: res.data })
			})
			.catch(err => {
				console.log(err)
				Alert.alert('Ops!', 'Algo deu errado ao obter o número de adoções.')
			})
	}

	selectAdoption = (adoptionId) => {
		console.log(adoptionId)
		this.setState({ adoptionId }, this.closeAdoptionSelection)
	}

	closeAdoptionSelection = () => {
		this.setState({ selectAnimalAdoptedVisible: false })
	}

	navigateToBack = () => {
		this.props.navigation.goBack()
	}

	toggleImageBrowserVisibility = () => {
		this.setState({ imageBrowserVisible: !this.state.imageBrowserVisible })
	}

	sendRegularReport = async () => {

		if (!this.checkIfImagesAreSelected()) {
			return
		}

		let adoptionId = this.state.adoptionId

		await axios.post(`${baseApiUrl}/remote-monitoring`, { remoteMonitoring: { observations: this.state.observations, adoptionId: adoptionId } })
			.then(res => {
				console.log(res.data)
				const remoteMonitoringId = res.data
				this.saveImages(remoteMonitoringId)
			})
			.catch(err => {
				console.log(err.response.data)
				Alert.alert('Ops', 'Ocorreu um erro ao enviar relatório.')
			})
	}


	saveImages = async (remoteMonitoringId) => {

		let picturesUploaded = []
		this.state.imagesPack.map(async image => {

			let imageData = new FormData()
			imageData.append('remoteMonitoringPicture', image)
			imageData.append('remoteMonitoringId', remoteMonitoringId)

			await axios.post(`${baseApiUrl}/remote-monitoring/picture`, imageData)
				.then(res => {
					console.log('foi')
					picturesUploaded.push(true)
				})
				.catch(err => {
					picturesUploaded.push(false)
					console.log('não foi')
				})
		})

		let valid = picturesUploaded.reduce((total, current) => total && current, true)
		if (valid) {
			Alert.alert('Oba!', 'Seu relatório foi enviado com sucesso!')
		} else {
			Alert.alert('Erro!', 'Ocorreu um erro ao enviar o relatório!')
		}
	}

	checkIfImagesAreSelected = () => {
		if (this.state.imagesPack.length < 1) {
			Alert.alert('Ops!', 'Você não selecionou nenhuma imagem para enviar')
			return false
		} else {
			return true
		}
	}

	render() {

		return (
			<View style={styles.container}>
				<StatusBar />

				<Modal animationType='slide'
					visible={this.state.selectAnimalAdoptedVisible}
					onRequestClose={() => this.props.navigation.goBack()}
				>
					<SelectAnimalAdopted onSelectAdoption={this.selectAdoption} 
					numberOfAdoptions={this.state.numberOfAdoptions} 
					onNavigateToBack={this.navigateToBack}
					/>
				</Modal>

				<Modal
					animationType='slide'
					visible={this.state.imageBrowserVisible}
					onRequestClose={this.toggleImageBrowserVisibility}
				>	
					<View style={styles.imageBrowserContainer}>
						<ImageBrowser max={3}
							loadCount={20}
							renderSelectedComponent={
								(num) => < PhotoSelectIndicator value={num}
								/>}
							onChange={
								(num, onSubmit) => {
									onSubmit(num)
								}
							}
							callback={
								(imagesSelected) => {
									let imagesPack = []

									console.log(imagesSelected._W)
									imagesSelected._W.map(image => {
										let imageData = {
											uri: image.uri,
											type: 'image/' + image.filename.split('.')[1],
											name: image.filename
										}
										imagesPack.push(imageData)
									})
									console.log(imagesPack)

									this.setState({ imagesPack })
								}
							}
						/>
						<View style={styles.browserConfirmArea}>
							<TouchableOpacity onPress={this.toggleImageBrowserVisibility}>
								<Icon name='check-circle' size={60} style={styles.checkIcon} />
							</TouchableOpacity>
						</View>
					</View>


					<TouchableOpacity style={{ flex: 1 }} onPress={this.toggleImageBrowserVisibility}>
						<View style={styles.browserFooter} >
							<Icon name='angle-down' size={30} color='black' style={styles.angleDownIcon} />
						</View>
					</TouchableOpacity>
				</Modal>
				<ScrollView style={{ flex: 1, width: '100%' }}>
					<View style={styles.headerElement}>
						<Image style={styles.imgElement} source={require('./../../assets/imgs/upload.png')} />
						<Text style={{ fontWeight: 'bold', fontSize: 22, color: '#64718C' }}>Relatório Quinzenal</Text>
					</View>
					<View style={styles.containerUpload}>
						<View style={styles.formUpload}>
							<TextInput
								placeholder="Observações"
								value={this.state.observations}
								style={styles.observationsInput}
								multiline={true}
								numberOfLines={4}
								onChangeText={(observations) => this.setState({ observations })}
							/>

							<View style={styles.areaButtons}>
								<TouchableOpacity style={styles.btnSelectImage} onPress={this.toggleImageBrowserVisibility}>
									<Icon name="phone" size={15} color='#FFF' style={{ marginRight: 15 }} />
									<Text style={styles.txtBtn}>Selecionar imagem</Text>
								</TouchableOpacity>

								<TouchableOpacity style={styles.btnUploadImage} onPress={this.sendRegularReport}>
									<Icon name="upload" size={15} color='#FFF' style={{ marginRight: 15 }} />
									<Text style={styles.txtBtn}>Enviar</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}

}

