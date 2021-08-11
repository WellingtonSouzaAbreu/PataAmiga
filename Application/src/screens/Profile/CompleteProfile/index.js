import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, TextInput, Image, Alert } from 'react-native'
import axios from 'axios'

import styles from './styles'

import { baseApiUrl } from '../../../common/baseApiUrl'

const initialState = {
	id: null,
	city: null,
	address: null,
	houseNumber: null,
	email: null,
	phone: null,
	cellNumber: null,
	name: null,
	district: null
}

export default class CompleteProfile extends Component {

	state = { ...initialState }

	componentDidMount = () => {
		this.loadUserDataFromNavigation()
	}

	loadUserDataFromNavigation = () => {
		this.setState({ ...this.props.navigation.state.params })
	}

	updateProfile = async () => {

		const user = { ...this.state }

		await axios.put(`${baseApiUrl}/user/${this.state.id}`, { user })
			.then(res => Alert.alert('Oba!', 'Seu perfil foi atualizado com sucesso', [{ text: "OK", onPress: () => this.props.navigation.goBack() }]))
			.catch(err => {
				console.log(err)
				Alert.alert('Ops!', 'Algo deu errado ao atualizar o seu perfil.', <Button />)
			})
	}

	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.headerImage} source={require('./../../../assets/imgs/profileaddinfo.png')} />
				<Text style={styles.title}>Estas Informações são necessárias para o procedimento de adoção</Text>
				<View style={styles.formCompleteProfile}>
					<View style={styles.inputsArea}>
						<TextInput style={styles.longInput} placeholder="Email"
							value={this.state.email} onChangeText={(email) => this.setState({ email })} />
						<TextInput style={styles.longInput} placeholder="RUA"
							value={this.state.address} onChangeText={(address) => this.setState({ address })} />
						<View style={styles.inputRow}>
							<TextInput style={styles.shortInput} placeholder="Número " keyboardType={'number-pad'}
								value={this.state.houseNumber} onChangeText={(houseNumber) => this.setState({ houseNumber })} />
							<TextInput style={styles.shortInput} placeholder="Bairro"
								value={this.state.district} onChangeText={(district) => this.setState({ district })} />
						</View>
						<View style={styles.inputRow}>
							<TextInput style={styles.shortInput} placeholder="Cidade "
								value={this.state.city} onChangeText={(city) => this.setState({ city })} />
							{/* <TextInput style={styles.shortInput} placeholder="Estado"
								value={this.state.state} onChangeText={(state) => this.setState({ state })} /> //TODO Não alocado no banco */}
						</View>
					</View>
					<TouchableOpacity style={styles.saveButton} onPress={this.updateProfile}>
						<Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>Salvar {/* //TODO mandar o botão lá pra baixo, padronização*/}</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}