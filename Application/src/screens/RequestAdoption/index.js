import React, { Component } from "react";
import { View, Text, Image, TextInput, Modal, StatusBar, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Button } from 'galio-framework';
import axios from 'axios'
import { ImageBrowser } from 'expo-image-picker-multiple'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles.js'

import { baseApiUrl } from "../../common/baseApiUrl.js";
import PhotoSelectIndicator from './../../components/PhotoSelectIndicator'

const initialState = {
	description: 'Tem muitos gatos para ele brincar',
	imagesPack: [],

	imageBrowserVisible: false
}

export default class RequestAdoption extends Component {

	state = { ...initialState }

	toggleImageBrowserVisibility = () => {
		this.setState({ imageBrowserVisible: !this.state.imageBrowserVisible })
	}

	sendRequestAdoption = async () => {

		if (!this.checkIfImagesAreSelected()) {
			return
		}
		
		const animalId = this.props.navigation.state.params.animalId

		await axios.post(`${baseApiUrl}/interesteds-in-adoption/${animalId}`, { interestedInAdoption: { description: this.state.description } })
			.then(res => {
				console.log(res.data)
				const interestedInAdoptionId = res.data
				this.saveImages(animalId)
			})
			.catch(err => {
				console.log(err)
				Alert.alert('Ops', 'Ocorreu um erro ao manifestar interesse')
			})
	}

	saveImages = async (interestedInAdoptionId) => {

		let picturesUploaded = [true]
		this.state.imagesPack.map(async image => {

			let imageData = new FormData()
			imageData.append('interestedPicture', image)
			imageData.append('interestedInAdoptionId', interestedInAdoptionId)

			await axios.post(`${baseApiUrl}/interested-in-adoption/picture`, imageData)
				.then(res => {
					console.log('foi')
					picturesUploaded.push(true)
				})
				.catch(err => {
					picturesUploaded.push(false)
					console.log('não foi')
				})
		})

		let valid = picturesUploaded.reduce((total = true, current) => total && current)
		if (valid) {
			Alert.alert('Oba!', 'Você é um candidato à adoção, aguarde que a ONG entrará em contato contigo')
		} else {
			Alert.alert('Erro!', 'Ocorreu um erro ao salvar as imagens!')
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
							<Icon name='angle-down' size={30} color='black' />
						</View>
					</TouchableOpacity>
				</Modal>

				<ScrollView style={{ flex: 1, width: '100%' }}>
					<View style={styles.headerElement}>
						<Image style={styles.imgElement} source={require('./../../assets/imgs/homerequest.png')} />
						<Text style={{ fontWeight: 'bold', fontSize: 22 }}>Onde ele vai morar?</Text>
					</View>
					<View style={styles.containerUpload}>
						<View style={styles.formUpload}>

							<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Enviar Descrição</Text>
							<TextInput
								value={this.state.description}
								placeholder="Detalhes"
								style={styles.descriptionInput}
								multiline={true}
								numberOfLines={5}
								onChangeText={(description) => this.setState({ description })}
							/>

							<Button icon="camera" iconFamily="feather"
								iconSize={25} color="warning" iconColor="#fff"
								style={styles.btSelectImage}
								onPress={this.toggleImageBrowserVisibility}
							>
								Escolher Imagem
							</Button>

							<Button color="info" style={styles.buttonUpload}
								onPress={this.sendRequestAdoption}
							>
								Enviar
							</Button>

						</View>
					</View>
				</ScrollView>
			</View>
		);
	}

}

